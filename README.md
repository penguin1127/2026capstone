마음가짐: <br>
<img width="847" height="959" alt="image" src="https://github.com/user-attachments/assets/a6e0ee03-98b7-47da-8636-65233a9e6521" />

---

## 프로젝트 실행 가이드

### 프론트엔드 실행 (현재 단독 실행 가능)

```bash
cd frontend
npm install       # 최초 1회만
npm run dev       # http://localhost:5173
```

> 백엔드 없이도 UI 확인 가능. 백엔드 API 호출이 필요한 기능은 연결 전까지 동작 안 함.

---

### 백엔드 실행 (Spring Boot)

> **사전 조건**: Docker Desktop 실행 중 + PostgreSQL 컨테이너 실행 중이어야 함.

**1. PostgreSQL 컨테이너 실행**

```bash
docker start pixelart-db
```

아직 컨테이너가 없으면 최초 1회 생성:

```bash
docker run -d \
  --name pixelart-db \
  -e POSTGRES_DB=pixelart \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=1234 \
  -p 5432:5432 \
  postgres:16
```

**2. 백엔드 실행**

```bash
cd backend/server
./gradlew bootRun
# Windows PowerShell: .\gradlew.bat bootRun
```

백엔드 기본 포트: `http://localhost:8080`

---

### 전체 스택 동시 실행 순서

```
1. Docker Desktop 실행
2. docker start pixelart-db       # DB 컨테이너 시작
3. cd backend/server && ./gradlew bootRun   # 백엔드 시작
4. cd frontend && npm run dev     # 프론트엔드 시작
```

> **현재 상태**: 프론트엔드와 백엔드 API 연결 작업 전 단계. Docker DB는 백엔드 연결 전까지 실행 안 해도 됨.