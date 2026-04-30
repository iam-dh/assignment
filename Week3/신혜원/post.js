const postDetail = document.querySelector("#post-detail");
const commentSection = document.querySelector("#comment-section");

const params = new URLSearchParams(window.location.search);
const postIdStr = params.get("id");
const postId = Number(postIdStr);

// 예외처리 1: URL에 id가 없거나, 숫자가 아니거나, 양수가 아닌 경우
if (!postIdStr || isNaN(postId) || postId <= 0) {
  commentSection.hidden = true;
  postDetail.innerHTML = `
    <p class="empty-message">잘못된 접근입니다.</p>
    <a href="./posts.html" class="btn">목록으로 돌아가기</a>
  `;
} else {
  fetch("./posts.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터를 불러오는 데 실패했습니다. (상태 코드: " + response.status + ")");
      }
      return response.json();
    })
    .then((posts) => {
      const selectedPost = posts.find((post) => post.id === postId);

      // 예외처리 2: 해당 id의 게시글이 없는 경우
      if (!selectedPost) {
        commentSection.hidden = true;
        postDetail.innerHTML = `
          <p class="empty-message">존재하지 않는 게시글입니다.</p>
          <a href="./posts.html" class="btn">목록으로 돌아가기</a>
        `;
        return;
      }

      // 정상: 게시글 렌더링
      commentSection.hidden = false;
      postDetail.innerHTML = `
        <div class="category">${selectedPost.category}</div>
        <h2 class="post-title">${selectedPost.title}</h2>
        <div class="post-info">
          <span>작성자: ${selectedPost.author}</span>
          <span>작성일: ${selectedPost.date}</span>
          <span>조회수: ${selectedPost.views}</span>
        </div>
        <div class="post-content">${selectedPost.content}</div>
        <a href="./posts.html" class="btn">목록으로</a>
      `;

      const comments = selectedPost.comments || [];
      const commentItemsHtml = comments
        .map((comment) => {
          return `
            <div class="comment-item">
              <div class="comment-info">
                <strong>${comment.author}</strong>
                <span>${comment.date}</span>
              </div>
              <p>${comment.content}</p>
            </div>
          `;
        })
        .join("");

      commentSection.innerHTML = `
        <h2 class="comment-title">댓글 ${comments.length}개</h2>
        ${comments.length === 0
          ? '<p class="empty-message">아직 댓글이 없습니다.</p>'
          : commentItemsHtml
        }
      `;
    })
    .catch((error) => {
      // 예외처리 3: fetch 자체가 실패한 경우
      commentSection.hidden = true;
      postDetail.innerHTML = `
        <p class="empty-message">⚠️ 게시글을 불러올 수 없습니다.</p>
        <a href="./posts.html" class="btn">목록으로 돌아가기</a>
      `;
    });
}