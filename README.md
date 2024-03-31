# WeTube
## 프로젝트 소개
WeTube는 YouTube API를 활용하여 영상 제공 서비스 제작을 목표한
프로젝트입니다.
TypeScript와 API에 대한 이해도를 높이고 반응형 디자인 구성 및 다크모드 기능 구현을 필수 목표로 설정 후 프로젝트를 진행하였습니다.

[FEPS 1기🦁 | 11조 | Final 프로젝트]

> 팀원 : [이호](https://github.com/bomlang), [장현주](https://github.com/hyeonjuuu), [정소희](https://github.com/haha41)

> 개발기간 : 2023.11.20 ~ 2023.12.1

> [배포 페이지](https://fesp-01-final-project-dib-team.vercel.app/)

### 개발환경


<table>
<tr>
 <td align="center" width="100px">Front-End</td>
 <td width="800px">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>&nbsp
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>&nbsp
<img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>&nbsp
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"/>
    </td>
</tr>
<tr>
 <td align="center">Back-End</td>
 <td>
  <img src="https://img.shields.io/badge/youtube%20api-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/>
    <img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
  <tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">포맷터</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp 
 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
 </td>
</tr>
<tr>
 <td align="center">버전 및 이슈관리</td>
 <td>
 <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">&nbsp 
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
 </td>
 <tr>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>

<br />


## 주요기능

|메인페이지|상세페이지|  검색   |
|--|--|--|
| - Youtube API 활용한 영상 렌더링<br />- 콘텐츠 정보 렌더링<br />- 영상 자동 재생 | - 영상 콘텐츠 상세 정보 렌더링 <br /> - 댓글 작성 / 수정 / 삭제<br />- 관련 영상 렌더링<br />| - 검색어 기반 콘텐츠 검색|


<br />

## 폴더 구조 

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


<br />

## commit 컨벤션
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

<br />

