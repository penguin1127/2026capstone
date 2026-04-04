# 캡스톤 디자인 프로젝트 — CLAUDE.md

> 팀명: 익스팬션 조 | 팀장: 조성민 | 팀원: 원범석  
> 이 파일은 Claude Code가 프로젝트 전체 맥락을 파악하기 위한 참고 문서입니다.

---

## 프로젝트 개요

**주제**: AI 어시스턴트 기반의 픽셀아트 일관성 관리 및 에셋 생태계 플랫폼

**핵심 컨셉**:
- 사용자가 직접 그리되, AI가 근거 기반 피드백을 제공 (창작 주도권 보장)
- 에디터 + 에셋 허브 + 커뮤니티를 하나의 플랫폼으로 통합
- 프로젝트 단위 스타일 일관성을 보장하는 AI 가이드

---

## 디렉터리 구조

```
2026cap/
├── CLAUDE.md               ← 이 파일 (전체 프로젝트 컨텍스트)
├── front/                  ← React 프론트엔드
├── ERD_테이블정의.md
└── 캡스톤_프로젝트_백업.md
```

---

## 기술 스택

### 프론트엔드 (front/)
- **React** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Konva.js** — HTML5 Canvas 기반 픽셀아트 에디터
- **Zustand** — 전역 상태관리
- **Axios** — API 통신

### 백엔드 (별도 구현 예정)
- **Spring Boot 3.3.x**
- **Spring Security** + **JWT**
- **Spring Data JPA**
- **PostgreSQL** + **Flyway**
- **Swagger**

### 2학기 AI 예정
- **Spring AI 1.1**
- **pgvector** (벡터 검색)
- **FastAPI / OpenCV** (Python AI 서버)

---

## 서비스 모듈 (5단계 계획)

| 단계 | 학기 | 집중 | 내용 |
|---|---|---|---|
| 1 | 1학기 | React | HTML5 Canvas 기반 웹 에디터 |
| 2 | 1학기 | Spring Boot | 에셋 라이브러리 (DB, 태그, 공유) |
| 3 | 1학기 | Full Stack | 오픈 에셋 라이브러리 + 커뮤니티 |
| 4 | 2학기 | Python | AI 가이드 (유사 이미지 검색, 픽셀화 가이드) |
| 5 | 2학기 | AI Engine | 프로젝트 마스터 (스타일 일관성 분석) |

---

## 페이지 구조

1. **메인페이지** — 네비게이션 바 + 갤러리 작품 미리보기
2. **갤러리** — 자유 갤러리 / 전용 갤러리 (완전 별도 페이지, 탭 전환 없음)
3. **에셋 스토어** — 무료/유료 혼합, 파일 다운로드 방식
4. **에디터** — Canvas 기반 픽셀아트 제작 툴 (로그인 필수)
5. **커미션** — 작가 서비스 등록형 + 의뢰자 직접 요청형
6. **마이페이지** — 프로필 / 창작 / 활동내역 / 커미션 / 소셜관계 탭

---

## 주요 비즈니스 규칙

### 인증
- 비로그인: 갤러리/에셋 조회만 가능, 상호작용 시도 시 로그인 리다이렉트
- 에디터, 에셋 업로드: 로그인 필수
- JWT 기반 인증, refresh_token은 Redis 없이 DB로 관리

### 갤러리
- 자유 갤러리: 일반 이미지 업로드
- 전용 갤러리: 에디터 직접 공유 또는 전용 확장자(.json 기반 자체 포맷)만 업로드
- 작품 수정 시 댓글/좋아요 유지, 최근 수정 날짜 표시
- 비공개 전환 시 북마크 비공개, 재공개 시 북마크 복구
- 태그: 기본 선택 + 자유 태그 추가

### 에디터
- 작업 완료 후 선택지 (중복 선택 가능):
  - 내 프로젝트 저장
  - 갤러리 공유 (전용 갤러리 자동 등록)
  - 에셋 스토어 등록
  - 파일 내보내기 (PNG / 스프라이트시트)
  - 프로젝트 공유 (비동기 협업)
- 저장 방식: 덮어쓰기 (버전 관리 없음, Pixilart 방식)
- 프로젝트 파일 포맷: JSON 기반 자체 확장자

### 커미션
- 진행 흐름: 요청/수락 → 결제 → 제작 → 파일 전달 → 거래 완료
- 실시간 공동 편집은 추후 추가 예정

### 에셋 스토어
- 누구나 업로드 가능 (로그인 필수)
- 무료/유료 혼합, 유료는 결제 후 다운로드

---

## ERD 요약 (총 29개 테이블)

| 도메인 | 테이블 |
|---|---|
| 사용자 (4) | users, profiles, follows, refresh_tokens |
| 에디터/프로젝트 (3) | projects, layers, project_members |
| 갤러리 (5) | gallery_posts, gallery_images, gallery_comments, gallery_tags, gallery_reports |
| 에셋 스토어 (10) | asset_license_types, assets, asset_images, asset_versions, payments, asset_purchases, asset_sales_stats, asset_comments, asset_tags, asset_reports |
| 커미션 (3) | commissions, commission_files, commission_images |
| 공통 (4) | categories, likes, favorites, notifications |

### 주요 설계 결정
- 이미지: URL 저장 방식 (스토리지 → URL → DB)
- comments, tags, reports: 갤러리/에셋 별도 테이블 (FK 무결성)
- likes, favorites: target_type으로 갤러리/에셋 구분 (통합 테이블)
- users/profiles: 인증정보/프로필정보 분리 (정규화)
- gallery_posts, assets에 palette_data(JSONB) 컬럼 — AI 연동용
- projects에 ai_analyzed 플래그 — AI 분석 여부

---

## 유사 사이트 레퍼런스

| 사이트 | 참고 포인트 |
|---|---|
| **Pixilart** | 메인 레퍼런스 — 에디터+커뮤니티 통합, .pixil 전용 확장자 |
| **Pixiv** | 작품 피드 레이아웃, 태그 시스템, 작가 프로필 |
| **DeviantArt** | 커뮤니티 갤러리, 작품 카드 레이아웃 |
| **PixelJoint** | 픽셀아트 전문 갤러리 |
| **Lospec** | 팔레트 DB, 툴 사이트 느낌 |
| **Aseprite** | 전용 확장자(.ase) 방식 참고 |

---

## 미결정 사항

- 전용/자유 갤러리 상세 페이지 구조 (별도 페이지 vs 동일 페이지+특화기능)
- 전용/자유 갤러리 간 작품 이동 가능 여부
- 갤러리 작품 → 에셋 스토어 추후 등록 가능 여부
- CSS 스타일링 세부 방향
- 배포 환경 세부 방향 (Nginx 예정)
- 소셜 로그인(OAuth) 추후 추가 예정
- 실시간 공동 편집 추후 추가 예정
- pgvector 관련 테이블 추가 예정 (2학기)

---

## 2학기 AI 기능 계획

- 팔레트 추천 (색상 분석)
- 유사 작품 찾기 (이미지 임베딩 벡터 + pgvector)
- RAG (문서 기반 AI 답변)
- 프로젝트 단위 일관성 분석
- 드로잉 보정
- XAI 피드백 (명암, 색상 이론 설명)
