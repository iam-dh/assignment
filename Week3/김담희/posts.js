
// HTML 요소를 선택해서 변수에 저장합니다.
const postList = document.getElementById("post-list");
const postDetail = document.getElementById("post-detail");
const commentList = document.getElementById("comment-list");
const commentCount = document.getElementById("comment-count");

if (!Array.isArray(POSTS_DATA) || POSTS_DATA.length === 0) {
  alert("게시물 데이터가 없습니다.");
  throw new Error("POSTS_DATA invalid");
}

// 처음에 선택된 게시물 ID를 초기화합니다. POSTS_DATA가 있으면 첫 번째 게시물 ID를 사용합니다.
let selectedPostId = POSTS_DATA[0]?.id ?? null;


// 1. 포맷터 재사용으로 성능 업그레이드
const formatter = new Intl.NumberFormat("ko-KR");
function formatNumber(num) {
  const value = Number(num);
  return isNaN(value) ? "0" : formatter.format(value);
}

// 2. 렌더링 함수는 순수하게 "그리는 역할"만 수행 (이벤트 리스너 제거)
function renderPostList() {
  postList.innerHTML = POSTS_DATA.map((post) => {
    const activeClass = post.id === selectedPostId ? "active" : "";
    return `
      <a href="#post-detail" class="post-card ${activeClass}" data-id="${post.id}">
        </a>
    `;
  }).join("");
}

// 3. 이벤트는 하단에서 '위임' 방식으로 딱 한 번만 설정
postList.addEventListener("click", (e) => {
  const card = e.target.closest(".post-card");
  if (!card) return;

  e.preventDefault();
  
  // 데이터 타입에 주의하여 ID 할당
  const id = Number(card.dataset.id);
  if (isNaN(id)) return;

  selectedPostId = id;
  renderAll(); // 상태가 변했으니 다시 그리기

  document.getElementById("post-detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// 목록과 상세 정보를 함께 다시 그려주는 마스터 함수
function renderAll() {
  renderPostList();
  renderPostDetail(); 
}

// 초기 실행
renderAll();