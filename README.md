[FEPS 1기🦁 | 11조 | Final 프로젝트]

> 프로젝트 : https://github.com/bomlang/FESP01-Final-Project

> 팀원 : [이호](https://github.com/bomlang), [장현주](https://github.com/hyeonjuuu), [정소희](https://github.com/haha41)

> 개발기간 : 2023.11.20 ~ 2023.12.1

> [배포 페이지](https://fesp-01-final-project-dib-team.vercel.app/)

# 1. 프로젝트 소개

해당 프로젝트는 유튜브를 바탕으로 UI와 영상 콘텐츠 관련한 기능 구현을 목표로 한 프로젝트 입니다.

# 2. 기술 스택 및 개발 환경

### FrontEnd

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

### BackEnd

- Youtube API
- supabase

### 협업방식

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">


# 3. Git 컨벤션

- [Feat] 새로운 기능 추가
- [Fix] 버그 수정
- [Design] CSS 등 사용자 UI 디자인 변경
- [Modify] 함수명이나 변수명 등 코드를 수정한 경우
- [Refactor] 코드 리팩토링 -> 기존 코드의 구조를 변경하거나 개선
- [Docs] README 문서 수정 또는 코드 주석을 추가/수정하거나, 사용자 매뉴얼을 작성하는 등의 작업
- [Test] 테스트 추가, 테스트 리팩토링
- [Chore] 빌드 부분 혹은 패키지 매니저 수정
- [Rename] 파일 혹은 폴더명 수정
- [Remove]파일 혹은 폴더 삭제

# 4. 프로젝트 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜commentApi.ts
 ┃ ┣ 📜formatDateDifference.ts
 ┃ ┣ 📜getRelatedVideo.ts
 ┃ ┣ 📜getVideoAPI.ts
 ┃ ┗ 📜getVideoData.ts
 ┣ 📂components
 ┃ ┣ 📜AddComment.tsx
 ┃ ┣ 📜BackButton.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜Comment.tsx
 ┃ ┣ 📜RelatedVideo.tsx
 ┃ ┣ 📜SearchBar.tsx
 ┃ ┣ 📜Spinner.tsx
 ┃ ┣ 📜VideoComponets.tsx
 ┃ ┣ 📜VideoDetailItem.tsx
 ┃ ┗ 📜YoutubeVideo.tsx
 ┣ 📂hooks
 ┃ ┗ 📜SearchVideo.ts
 ┣ 📂layout
 ┃ ┣ 📂RootLayout
 ┃ ┃ ┗ 📜RootLayout.tsx
 ┃ ┗ 📜Header.tsx
 ┣ 📂pages
 ┃ ┣ 📜NotFound.tsx
 ┃ ┣ 📜VideoDetail.tsx
 ┃ ┗ 📜VideoMain.tsx
 ┣ 📂store
 ┃ ┣ 📜channelThumbnailAtom.ts
 ┃ ┣ 📜commentAtom.ts
 ┃ ┣ 📜searchBarValueAtom.ts
 ┃ ┣ 📜videoAtom.ts
 ┃ ┗ 📜videoHoveringAtom.ts
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜data.d.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜interface.ts
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜setupTests.ts
 ┗ 📜tailwind.css
```


