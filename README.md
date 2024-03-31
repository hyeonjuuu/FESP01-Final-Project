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

## Commit 컨벤션
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

## 기능구현 및 프로젝트를 통해 배운점

### 1. API 활용 방법 학습
API 키 발급 및 관리를 Youtube API를 연동할 수 있었으며, Youtube API의 공식 문서를 읽고 필요한 데이터를 axios의 get 메서드를 통해 렌더링할 수 있었습니다.

### 2. Supabase 데이터 CRUD 학습
데이터베이스로 Supabase를 활용하여 CRUD 기능을 구현하였습니다. Supabase의 데이터 테이블을 생성하여 유저의 댓글을 작성, 삭제, 수정할 수 있는 기능을 구현하였습니다.

### 3. Tailwind CSS 활용한 반응형 디자인
Tailwind CSS의 클래스 유틸리티를 활용하여 sm, md, lg, xl 사이즈에 대응하는 반응형 디자인을 구현하였습니다.
또한 이에 따른 grid column 값을 제어하여 다양한 화면 크기에 맞는 레이아웃으로 조정하였습니다.

### 4. TypeScript 프로젝트 경험
TypeScript 프로젝트를 경험하며 정적 타입을 통한 코드의 안정성과 가독성에 대해 학습하였습니다. 이를 통해 타입 관련 오류를 미리 발견하며, 코드의 예측 가능성과 유지보수성을 높일 수 있었습니다.

### 5. Recoil을 활용한 상태관리
Recoil의 atom을 활용한 상태 구독, 업데이트 API를 사용하여 간단하고 안정적인 전역 상태를 관리하였습니다.
useState를 사용할 때의 props drilling을 해결하고, useContext의 가독성 및 유지보수성이 취약한 점을 해결하고자 Recoil을 도입하였습니다. 크게 atom, selector의 기능만 사용해보았지만, atom 생성을 통해 useContext 사용시의 가독성이 떨어지는 점과 유지 보수성을 해결할 수 있었고, 전역 상태 관리를 통해 props drilling을 해결할 수 있어 효율적인 상태 관리 방법을 익힐 수 있었습니다.

