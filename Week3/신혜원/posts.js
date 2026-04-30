const postList = document.querySelector("#post-list");

// 로딩 중 표시
postList.innerHTML = `<p class="empty-message">데이터를 불러오는 중입니다...</p>`;

fetch("./posts.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("데이터를 불러오는 데 실패했습니다. (상태 코드: " + response.status + ")");
    }
    return response.json();
  })
  .then((posts) => {
    if (posts.length === 0) {
      postList.innerHTML = `<p class="empty-message">게시글이 없습니다.</p>`;
      return;
    }

    const postItemsHtml = posts
      .map((post) => {
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
      })
      .join("");

    postList.innerHTML = postItemsHtml;
  })
  .catch((error) => {
    postList.innerHTML = `
      <div class="post-box">
        <p class="empty-message">⚠️ 게시글 목록을 불러올 수 없습니다.</p>
        <button class="btn" onclick="location.reload()">다시 시도</button>
      </div>
    `;
  });