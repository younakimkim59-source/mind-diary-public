# 🚀 GitHub Pages 배포 가이드

## 📋 **단계별 배포 방법**

### 1. **GitHub 저장소 생성**
1. GitHub.com에 로그인
2. "New repository" 클릭
3. Repository name: `mind-diary-perfect`
4. Public 선택
5. "Create repository" 클릭

### 2. **로컬 Git 설정**
```bash
# Git 초기화
git init

# 원격 저장소 추가 (your-username을 실제 사용자명으로 변경)
git remote add origin https://github.com/your-username/mind-diary-perfect.git

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 마음일기장 앱"

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 3. **GitHub Pages 설정**
1. GitHub 저장소 페이지로 이동
2. "Settings" 탭 클릭
3. 왼쪽 메뉴에서 "Pages" 클릭
4. Source: "GitHub Actions" 선택
5. 저장

### 4. **자동 배포 확인**
- GitHub Actions 탭에서 배포 진행상황 확인
- 약 2-3분 후 배포 완료
- `https://your-username.github.io/mind-diary-perfect/` 접속

## 📱 **핸드폰에서 접속**
배포 완료 후 핸드폰에서 위 URL로 접속하면 됩니다!

## 🔄 **업데이트 방법**
```bash
# 코드 수정 후
git add .
git commit -m "Update: 새로운 기능 추가"
git push origin main
# 자동으로 GitHub Pages에 배포됩니다
```

## 🎉 **완료!**
이제 어디서든 마음일기장을 사용할 수 있습니다!
