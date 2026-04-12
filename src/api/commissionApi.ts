import api from '../lib/axios'
import type { PageResponse } from './galleryApi'

export type CommissionStatus =
  | 'PENDING'
  | 'ACCEPTED'
  | 'IN_PROGRESS'
  | 'REVIEW'
  | 'COMPLETED'
  | 'CANCELLED'

export interface CommissionSummary {
  commissionId: number
  title: string
  clientId: number
  clientNickname: string
  artistId: number | null
  artistNickname: string | null
  budget: number
  deadline: string
  status: CommissionStatus
  isPublic: boolean
  createdAt: string
}

export interface CommissionResponse extends CommissionSummary {
  description: string | null
  imageUrls: string[]
  updatedAt: string
}

export interface CommissionCreateRequest {
  title: string
  description?: string
  budget: number
  deadline: string  // 'YYYY-MM-DD'
  isPublic?: boolean
  imageUrls?: string[]
}

export interface CommissionUpdateRequest {
  title?: string
  description?: string
  budget?: number
  deadline?: string
  isPublic?: boolean
}

export const commissionApi = {
  // 공개 커미션 목록 (비로그인 허용)
  getPublicList: (params?: { page?: number; size?: number }) =>
    api.get<{ success: boolean; data: PageResponse<CommissionSummary> }>('/api/commissions', { params }),

  // 내가 의뢰한 커미션 목록
  getMyList: (params?: { page?: number; size?: number }) =>
    api.get<{ success: boolean; data: PageResponse<CommissionSummary> }>('/api/commissions/my', { params }),

  // 내가 수락한 커미션 목록 (작가 기준)
  getArtistList: (params?: { page?: number; size?: number }) =>
    api.get<{ success: boolean; data: PageResponse<CommissionSummary> }>('/api/commissions/artist', { params }),

  // 커미션 의뢰 생성
  createCommission: (data: CommissionCreateRequest) =>
    api.post<{ success: boolean; data: CommissionResponse }>('/api/commissions', data),

  // 커미션 상세
  getCommission: (commissionId: number) =>
    api.get<{ success: boolean; data: CommissionResponse }>(`/api/commissions/${commissionId}`),

  // 커미션 수정
  updateCommission: (commissionId: number, data: CommissionUpdateRequest) =>
    api.patch<{ success: boolean; data: CommissionResponse }>(`/api/commissions/${commissionId}`, data),

  // 커미션 수락 (작가가 호출)
  acceptCommission: (commissionId: number) =>
    api.post<{ success: boolean; data: CommissionResponse }>(`/api/commissions/${commissionId}/accept`),

  // 상태 변경
  updateStatus: (commissionId: number, status: CommissionStatus) =>
    api.patch<{ success: boolean; data: CommissionResponse }>(`/api/commissions/${commissionId}/status`, { status }),

  // 커미션 취소
  cancelCommission: (commissionId: number) =>
    api.post<{ success: boolean }>(`/api/commissions/${commissionId}/cancel`),

  // 파일 업로드
  uploadFile: (commissionId: number, data: { fileUrl: string; fileName: string }) =>
    api.post<{ success: boolean; data: CommissionResponse }>(`/api/commissions/${commissionId}/files`, data),
}
