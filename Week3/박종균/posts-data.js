/*
 * [2주차 실습] posts-data.js
 * -> “화면에 보여 줄 글 목록”만 객체 배열로 모아 둠 (데이터와 마크업 분리)
 * 다음 단계 -> posts.js에서 이 배열을 돌려 HTML 문자열로 만든 뒤 붙이기~
 */

// [1] 게시글 여러 개를 담는 배열
const posts = [
  // [2] 글 한 개 = 객체 하나. 필드 이름은 posts.js 템플릿과 맞출 것!
  {
    id: 1,
    category: "공지",
    title: "프론트엔드 스터디 1주차 안내",
    summary: "HTML과 CSS를 활용해 게시글 상세 페이지를 만들어보는 주차입니다.",
    author: "관리자",
    date: "2026.03.16",
    views: 128,
  },
  {
    id: 2,
    category: "질문",
    title: "CSS 박스모델이 아직 헷갈립니다",
    summary: "margin, padding, border의 차이를 실제 예시로 이해하고 싶습니다.",
    author: "김학생",
    date: "2026.03.17",
    views: 34,
  },
  {
    id: 3,
    category: "자유",
    title: "스터디 과제 해보니까 재밌네요",
    summary:
      "제목과 본문을 바꿔서 다시 만들어보니 구조가 조금씩 보이기 시작했습니다.",
    author: "박스터디",
    date: "2026.03.17",
    views: 57,
  },
  {
    id: 4,
    category: "공지",
    title: "2주차 준비물 안내",
    summary:
      "다음 주에는 목록 페이지와 JS 더미데이터 렌더링을 다룰 예정입니다.",
    author: "관리자",
    date: "2026.03.18",
    views: 91,
  },
  {
    id: 5,
    category: "질문",
    title: "시맨틱 태그는 꼭 써야 하나요?",
    summary:
      "div만 써도 화면은 만들어지는데 header, main, section을 쓰는 이유가 궁금합니다.",
    author: "이학습",
    date: "2026.03.18",
    views: 22,
  },
  {
    id: 6,
    category: "자유",
    title: "스터디 페이지 색감 바꿔봤어요",
    summary:
      "배경색과 버튼 색을 조금 바꿔보니 같은 구조여도 분위기가 꽤 달라졌습니다.",
    author: "최디자인",
    date: "2026.03.19",
    views: 40,
  },
];

// [3] 위와 같은 형태로 객체를 하나 더 push 하거나 복붙해 보면 목록이 자동으로 늘어남
