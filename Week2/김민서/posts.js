
const postList = document.querySelector("#post-list");

/*const postItemsHtml = posts.map((post) => {
    return `
        <article class="post-item">
            <div class="post-item-category">${post.category}</div>
            <h3 class="post-item-title">
                <a href="./post.html">${post.title}</a>
            </h3>
            <p class="post-item-summary">${post.summary}</p>
            <div class="post-item-info">
                <span>${post.author}</span>
                <span>${post.date}</span>
                <span>조회수 ${post.views}</span>
            </div>
        </article>
    `;
}).join(""); 

postList.innerHTML = postItemsHtml;
*/
/**
 * 1. posts-data.js에 글 1개 더 추가 해보기
 * 2. post.js에서 링크를 ./post.html?id=+post.id 처럼 바꿔보기
 * 3. 카테고리만 다른 글 하나 넣어서 테스트 해보기
 * 
 */

let postItemsHtml= "";
for (let i = 0; i < posts.length ; i++) {
    const post =posts[i];
    postItemsHtml += `
        <article class="post-item">
        <div class="post-item-category">${post.category}</div>
        <h3 class="post-item-title">
            <a href="./post.html">${post.title}</a>
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

postList.innerHTML = postItemsHtml;