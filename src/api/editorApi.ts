import api from '../lib/axios'
import type { PageResponse } from './galleryApi'

export interface LayerResponse {
  layerId: number
  name: string
  layerOrder: number
  opacity: number
  isVisible: boolean
  layerData: string
  createdAt: string
  updatedAt: string
}

export interface ProjectSummary {
  projectId: number
  title: string
  thumbnailUrl: string | null
  canvasWidth: number
  canvasHeight: number
  status: string
  createdAt: string
  updatedAt: string
}

export interface ProjectResponse extends ProjectSummary {
  description: string | null
  aiAnalyzed: boolean
  layers: LayerResponse[]
}

export interface ProjectCreateRequest {
  title: string
  description?: string
  canvasWidth: number
  canvasHeight: number
  thumbnailUrl?: string
}

export interface ProjectUpdateRequest {
  title?: string
  description?: string
  thumbnailUrl?: string
}

export interface LayerSaveRequest {
  layerId?: number | null
  name: string
  layerOrder: number
  opacity: number
  isVisible: boolean
  layerData: string
}

export const editorApi = {
  // 내 프로젝트 목록
  getProjects: (params?: { page?: number; size?: number }) =>
    api.get<{ success: boolean; data: PageResponse<ProjectSummary> }>('/api/editor/projects', { params }),

  // 프로젝트 생성
  createProject: (data: ProjectCreateRequest) =>
    api.post<{ success: boolean; data: ProjectResponse }>('/api/editor/projects', data),

  // 프로젝트 상세 (레이어 포함)
  getProject: (projectId: number) =>
    api.get<{ success: boolean; data: ProjectResponse }>(`/api/editor/projects/${projectId}`),

  // 프로젝트 메타 수정
  updateProject: (projectId: number, data: ProjectUpdateRequest) =>
    api.patch<{ success: boolean; data: ProjectResponse }>(`/api/editor/projects/${projectId}`, data),

  // 프로젝트 삭제
  deleteProject: (projectId: number) =>
    api.delete<{ success: boolean }>(`/api/editor/projects/${projectId}`),

  // 레이어 전체 저장 (전체 교체)
  saveLayers: (projectId: number, layers: LayerSaveRequest[]) =>
    api.post<{ success: boolean; data: ProjectResponse }>(`/api/editor/projects/${projectId}/layers`, layers),

  // 협업 멤버 추가
  addMember: (projectId: number, targetUserId: number) =>
    api.post<{ success: boolean }>(`/api/editor/projects/${projectId}/members/${targetUserId}`),

  // 협업 멤버 제거
  removeMember: (projectId: number, targetUserId: number) =>
    api.delete<{ success: boolean }>(`/api/editor/projects/${projectId}/members/${targetUserId}`),
}
