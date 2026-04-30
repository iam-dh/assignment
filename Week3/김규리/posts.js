const postList = document.querySelector("#post-list");

function createPostItemHtml(post) {
  return `
      <article class="post-item">
        <div class="post-item-category">${post.category}</div>
        <h3 class="post-item-title">
          <a href="./post.html?id=${post.id}">${post.title}</a>
        </h3>
        <p class="post-item-summary">${post.summary}</p>
        <div class="post-item-info">
          <span>${post.author}</span>
          <span>${post.date}</span>
          <span>조회수 ${post.views}</span>
        </div>
      </article>
    `;
}

async function renderPostList() {
  try {
    // 로딩 표시 (선택사항)
    postList.innerHTML = `<p class="empty-message">데이터를 불러오는 중입니다...</p>`;

    const posts = await fetchPosts();

    if (!posts || posts.length === 0) {
      postList.innerHTML = `<p class="empty-message">게시글이 존재하지 않습니다.</p>`;
      return;
    }

    let postItemsHtml = "";
    for (let i = 0; i < posts.length; i++) {
      postItemsHtml += createPostItemHtml(posts[i]);
    }
    postList.innerHTML = postItemsHtml;
  } catch (error) {
    // API에서 throw한 에러를 여기서 잡아 UI로 보여줌
    postList.innerHTML = `
      <div class="empty-message">
        <p>⚠️ 게시글 목록을 불러오지 못했습니다.</p>
        <p style="font-size: 14px; color: #999;">${error.message}</p>
      </div>
    `;
  }
}

renderPostList();