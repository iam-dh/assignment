/*
 * [2주차 실습] posts.js
 * -> posts-data.js에 있는 posts 배열 → HTML 문자열 → #post-list 안에 삽입
 */

// [1] 목록을 넣을 빈 상자 찾기 (posts.html의 <section id="post-list">)
const postList = document.querySelector("#post-list");

  function createPostItemHtml(post)
  {
    return`
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

  async function renderPostList() 
  {
    const posts=await fetchPosts();
    
    const postItemsHtml = posts

    // [2] 배열 posts의 각 요소(post)를 HTML 한 덩어리로 바꾸기 → map
    // [3] 백틱(`) 문자열 안 ${post.title} 처럼 쓰면 → 템플릿 리터럴 (값이 문자열에 섞임)
    // 오류 해결: map 실행 순서가 잘못됨. renderPostList를 없애고 map을 우선 순위에 두거나, renderPostList 안에 map을 넣어 실행 순서를 맞춰야 함.
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
    // [4] map 결과는 문자열 배열 → 사이사이 빈 문자열로 이어서 하나의 긴 HTML로
    .join("");

    // [5] innerHTML: 문자열을 실제 DOM으로 파싱해 자식으로 넣음 (이때 화면에 목록이 보임)
    postList.innerHTML=postItemsHtml;
  }

renderPostList()