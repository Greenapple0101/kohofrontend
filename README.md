# 🌐 Global Home Prototype

**한국판 외국인 주거 매칭 플랫폼 'Global Home'**의 프론트엔드 프로토타입입니다. Babel, React, TailwindCSS를 활용해 MVP 수준의 기능을 구현했으며, Kakao Map API를 통해 지도와 마커 표시를 처리했습니다.

---

## 🎯 프로젝트 개요

- **목표**: 언어·문화 장벽으로 주거 정보를 찾기 어려운 외국인 유학생·근로자를 위해 국내 매물을 손쉽게 탐색할 수 있는 웹 앱 구현
- **기술 스택**: React, Tailwind CSS, Kakao Maps JavaScript SDK, Vite, Git & GitHub
- **주요 기능**:
  - 글로벌 내비게이션 바 & 검색 바
  - 지도(지도 중심 표시 및 마커 표시)
  - 매물 카드(Grid) 렌더링
  - 위시리스트(즐겨찾기) 로컬 스토리지 저장
  - 검색어 기반 필터링
  - 반응형 레이아웃 & 스타일링

---

## 🚀 지금까지 구현한 기능

1. **프로젝트 셋업**
   - Vite + React 템플릿 기반 개발 환경 구축
   - TailwindCSS 및 PostCSS 연동
   - GitHub 리포지토리 생성 및 기본 브랜치 세팅

2. **헤더 & 네비게이션**
   - KOHO 로고 및 사이트 이름 배치
   - Home / Listings / Favorites / Login 메뉴 UI
   - Sticky Header & 반응형 레이아웃

3. **검색 바**
   - `Search in Sinchon, Mapo-gu...` 플레이스홀더
   - Enter/클릭 시 필터링 로직 연결

4. **지도(Map)**
   - Kakao Maps JavaScript SDK 동적 로드
   - 초기 중심 좌표(서강대 인근) 설정
   - 더미 매물 좌표에 마커 표시
   - 마커 클릭 시 InfoWindow 팝업

5. **매물 카드(Listing Cards)**
   - 더미 데이터 기반 매물 카드 컴포넌트
   - 이미지, 제목, 설명, 위치, 가격 표시
   - 위시리스트(♡ Save / ★ Saved) 버튼
   - 로컬 스토리지에 즐겨찾기 상태 저장 및 복원

6. **검색 & 필터**
   - 제목/위치 키워드 실시간 필터링
   - 검색어 없거나 결과 없음 처리

7. **레이아웃 & 스타일링**
   - TailwindCSS 유틸리티 클래스
   - 반응형 그리드, 플렉스 정렬, 그림자, 호버 효과
   - CSS 변수와 커스텀 프로퍼티로 테마 색상 관리

8. **버전 관리 & 협업**
   - Git flow: `feature/*` 브랜치 → Pull Request → main 병합
   - 원격 충돌 해결(`git pull --rebase origin main`)

---

## 📦 실행 & 배포

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:5173 확인

# 빌드
npm run build

# 정적 파일 Preview
npm run preview
```

> Firebase Hosting, Netlify, Vercel 등으로 배포 가능

---

## 🛣️ 앞으로의 계획 (Roadmap)

1. **React & TypeScript 리팩토링** 🔄
   - 컴포넌트 단위 TS 마이그레이션
   - prop/상태 타입 안전성 강화

2. **실제 API 연동** 🔌
   - 백엔드 서버 연동 (Express / NestJS / Django 등)
   - 매물 데이터 CRUD, JWT 인증
   - Kakao Local API(장소 검색) 통합

3. **사용자 인증 & 권한** 🔐
   - Google OAuth, 카카오 로그인
   - 프로필, 예약/위시리스트 관리

4. **고도화된 UX** ✨
   - 무한 스크롤 & 페이지네이션
   - 필터 & 정렬 옵션 (가격, 거리, 평점)
   - 다국어 지원(i18n)

5. **테스트 & 품질 보증** 🧪
   - Jest + React Testing Library
   - E2E 테스트 (Cypress)
   - CI/CD 파이프라인 구축

6. **운영 & 모니터링** 📈
   - Sentry, LogRocket 등 에러 모니터링
   - Lighthouse 성능 최적화

7. **결제 통합** 💳
   - Stripe / TossPayments 연동
   - 보증금 / 예약 결제 플로우 구현


---

### 🤝 기여 가이드

1. Fork & Clone
2. `npm install` → `npm run dev`
3. `feature/xxx` 브랜치 생성 → PR 요청
4. 코드 리뷰 후 main 병합

---

## 📌 주요 기능

- **홈페이지**: 헤더, 통합 검색 바, 지도 뷰, 숙소 카드 리스트
- **Wish List**: 로컬 스토리지 기반 즐겨찾기 토글
- **지도 표시**: Kakao Maps SDK를 이용한 마커 및 인포윈도우
- **반응형 UI**: Tailwind CSS + 커스텀 CSS 적용
- **CI/CD**: GitHub Actions → Firebase Hosting 자동 배포

---

## 🛠 기술 스택

| 구분       | 기술                                    |
|------------|-----------------------------------------|
| 프레임워크 | React (Vite)                            |
| 스타일링   | Tailwind CSS, PostCSS                   |
| 지도       | Kakao Maps JavaScript SDK               |
| 배포       | Firebase Hosting                        |
| CI 도구    | GitHub Actions                          |

---

## 🗂 폴더 구조

```
KohoFrontend/
├── src/                 # React 소스 코드
│   ├── App.jsx
│   ├── Header.jsx
│   ├── Map.jsx
│   └── index.css        # 전역 스타일
├── public/              # 정적 파일 (favicon 등)
│   └── kohologo.jpg
├── dist/                # 빌드 산출물 (npm run build 후 생성)
│   ├── index.html
│   ├── 404.html
│   ├── assets/…        # js, css 번들 파일
│   └── kohologo.jpg
├── .github/workflows/   # GitHub Actions 워크플로우
│   └── firebase-hosting-merge.yml
├── firebase.json        # Firebase Hosting 설정
├── .firebaserc          # Firebase 프로젝트 연결 정보
├── package.json
└── README.md
```

---

## 🚀 로컬 개발 설정

1. 저장소 클론
   ```bash
   git clone https://github.com/Greenapple0101/kohofrontend.git
   cd kohofrontend
   ```
2. 의존성 설치
   ```bash
   npm install
   ```
3. 개발 서버 실행
   ```bash
   npm run dev
   ```
   - 기본: `http://localhost:5173`

---

## 🏗️ 빌드

프로덕션용 번들 생성:
```bash
npm run build
```  
빌드 결과는 `dist/` 폴더에 저장됩니다.

---

## ☁️ Firebase Hosting 배포

### 1. Firebase 프로젝트 초기화 (한 번만)
```bash
firebase login
firebase init hosting
```
- public 디렉터리: `dist`
- SPA rewrites: 모든 경로 `index.html`

### 2. 빌드 후 배포
```bash
npm run build
firebase deploy --only hosting
```

배포 완료 시, Firebase가 제공하는 URL을 통해 실제 사이트가 공개됩니다.

---

## 🤖 GitHub Actions CI/CD

`firebase init hosting:github`를 통해 자동 생성된 워크플로우에서:
- 커밋 푸시 → `npm ci` → `npm run build` → `firebase deploy`
- `FIREBASE_SERVICE_ACCOUNT_<PROJECT_ID>` 시크릿 설정 필요

```yaml
# .github/workflows/firebase-hosting-merge.yml 예시
name: Deploy to Firebase Hosting on merge

on:
  push:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_KOHOFRONTEND }}
          channelId: live
          projectId: kohofrontend
```

---

## 📄 라이선스

MIT © 2025 Global Home 팀



**Global Home** 프로젝트에 관심 가져주셔서 감사합니다! 🙏

