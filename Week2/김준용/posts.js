// 라이브 코딩: querySelector → map → join → innerHTML 순으로 작성합니다.
const postlist = document.querySelector("#post-list");

let postItemsHtml = "";
for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    postItemsHtml += `
        <article class="post-item">
            <div class="post-item-category">${post.category}</div>
            <h3 class="post-item-title">
                <a href = "./post.html">${post.title}</a>
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

//fill the inner section with the postItemHtml content
postlist.innerHTML = postItemsHtml;
/*
//what is posts referencing to?
const postItemHtml = posts.map((post) => {
    return `
        <article class="post-item">
            <div clas="post-item-category">${post.category}</div>
            <h3 clas="post-item-title>
                <a href = "./post.html?id=+${post.id}">${post.title}</a>
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


*/
