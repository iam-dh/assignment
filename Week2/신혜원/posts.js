const postList = document.querySelector("#post-list");

if (postList) {
  if (!Array.isArray(posts) || posts.length === 0) {
    postList.innerHTML = `<p>등록된 게시글이 없습니다.</p>`;
  } else {
    const postItems = posts
      .map(
        (post) => `
        <article class="post-item">
          <div class="post-item-category">${post.category}</div>
          <h3 class="post-item-title">
            <a href="./post.html?id=${post.id}">${post.title}</a>
          </h3>
          <p class="post-item-summary">${post.summary}</p>
          <div class="post-item-info">
            <span>작성자: ${post.author}</span>
            <span>작성일: ${post.date}</span>
            <span>조회수: ${post.views}</span>
          </div>
        </article>
      `
      )
      .join("");

    postList.innerHTML = postItems;
  }
}