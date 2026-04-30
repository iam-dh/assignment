const postDetail = document.querySelector("#post-detail");
const commentSection = document.querySelector("#comment-section");

function createCommentItemHtml(comment) {
  return `
    <div class="comment-item">
      <div class="comment-info">
        <strong>${comment.author}</strong>
        <span>${comment.date}</span>
      </div>
      <p>${comment.content}</p>
    </div>
  `;
}

function renderComments(comments) {
  if (!comments || comments.length === 0) {
    commentSection.innerHTML = `<h2 class="comment-title">댓글 0개</h2><p class="empty-message">작성된 댓글이 없습니다.</p>`;
    return;
  }

  let commentItemsHtml = "";
  for (let i = 0; i < comments.length; i++) {
    commentItemsHtml += createCommentItemHtml(comments[i]);
  }

  commentSection.innerHTML = `
    <h2 class="comment-title">댓글 ${comments.length}개</h2>
    ${commentItemsHtml}
  `;
}

function renderPost(post) {
  let contentHtml = "";
  for (let i = 0; i < post.content.length; i++) {
    contentHtml += `<p>${post.content[i]}</p>`;
  }

  postDetail.innerHTML = `
    <div class="category">${post.category}</div>
    <h2 class="post-title">${post.title}</h2>
    <div class="post-info">
      <span>작성자: ${post.author}</span>
      <span>작성일: ${post.date}</span>
      <span>조회수: ${post.views}</span>
    </div>
    <div class="post-content">${contentHtml}</div>
    <a href="./posts.html" class="btn">목록으로</a>
  `;

  renderComments(post.comments);
}

async function renderPostDetail() {
  const params = new URLSearchParams(window.location.search);
  const postIdStr = params.get("id");
  const postId = Number(postIdStr);

  // 예외 처리 1: ID가 URL에 없거나 숫자가 아닌 경우
  if (!postIdStr || isNaN(postId)) {
    postDetail.innerHTML = `
      <p class="empty-message">잘못된 접근입니다.</p>
      <a href="./posts.html" class="btn">목록으로 돌아가기</a>
    `;
    commentSection.style.display = "none";
    return;
  }

  try {
    const selectedPost = await fetchPostById(postId);

    // 예외 처리 2: 데이터를 성공적으로 불러왔으나 해당 ID의 글이 없는 경우
    if (!selectedPost) {
      postDetail.innerHTML = `
        <p class="empty-message">존재하지 않는 게시글입니다.</p>
        <a href="./posts.html" class="btn">목록으로 돌아가기</a>
      `;
      commentSection.innerHTML = "";
      return;
    }

    renderPost(selectedPost);
  } catch (error) {
    // 예외 처리 3: 네트워크 에러 등 fetch 자체가 실패한 경우
    postDetail.innerHTML = `<p class="empty-message">서버와 통신 중 오류가 발생했습니다.</p>`;
    commentSection.innerHTML = "";
  }
}

renderPostDetail();