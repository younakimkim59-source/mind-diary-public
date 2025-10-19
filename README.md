# 마음일기장 (Mind Diary)

부모와 자녀가 감정을 교류할 수 있는 비공개 일기 웹앱

## 🚀 시작하기

### 🌐 **온라인 데모**
**마음일기장**을 바로 체험해보세요!
👉 **[https://your-username.github.io/mind-diary-perfect/](https://your-username.github.io/mind-diary-perfect/)**

### 💻 **로컬 개발**

#### 필수 요구사항
- Node.js (v16 이상)
- npm 또는 yarn

#### 설치 및 실행

1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npm run dev
```

3. 브라우저에서 `http://localhost:5173` 접속

#### 빌드
```bash
npm run build
```

#### 📱 **핸드폰에서 테스트**
```bash
npm run dev
# Network 주소로 핸드폰에서 접속
# 예: http://192.168.1.100:5173/
```

## 📁 프로젝트 구조

```
mind-diary-perfect/
├── src/
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── MainScreen.jsx
│   │   ├── RoleSelection.jsx
│   │   ├── Calendar.jsx
│   │   └── Diary.jsx
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── assets/         # 이미지, 아이콘 등
│   ├── App.jsx         # 메인 앱 컴포넌트
│   ├── main.jsx        # 진입점
│   └── index.css       # 전역 스타일
├── public/             # 정적 파일
├── package.json        # 프로젝트 설정
├── vite.config.js      # Vite 설정
├── tailwind.config.js  # TailwindCSS 설정
└── postcss.config.js   # PostCSS 설정
```

## 🎨 주요 기능

- **메인 화면**: 4자리 비밀번호 입력
- **역할 선택**: 부모/자녀 선택
- **달력**: 월별 일기 달력
- **일기 작성**: 자녀/부모 각각의 일기 작성
- **감정 선택**: 20가지 감정 이모지
- **로컬 저장**: localStorage를 통한 데이터 저장

## 🛠 기술 스택

- **React 18**: UI 라이브러리
- **Vite**: 빌드 도구
- **TailwindCSS**: CSS 프레임워크
- **React Router**: 라우팅
- **LocalStorage**: 데이터 저장

## 📱 반응형 디자인

- Mobile-first 접근법
- 태블릿 및 데스크톱 지원
- 터치 친화적 인터페이스

## 🔮 향후 계획

- Firebase 연동
- 감정 통계 그래프
- 모바일 앱 확장
- 댓글 알림 기능
