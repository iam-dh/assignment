const postList = document.querySelector("#post-list");
const filterButtons = document.querySelectorAll(".category-filter button");

function renderPosts(category) {
    let filteredPosts = posts;

    if (category !== "전체") {
        filteredPosts = posts.filter(function(post) {
            return post.category === category;
        });
    }

    let postItemsHtml = "";

    for (let i = 0; i < filteredPosts.length; i++) {
        const post = filteredPosts[i];

        postItemsHtml += `
            <article class="post-item">
                <div class="post-item-category">${post.category}</div>
                <h3 class="post-item-title">
                    <a href="./post.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="post-item-summary">${post.summary}</p>
                <div class="post-item-info">
                    <span>${post.author}</span>
                    <span>${post.data}</span>
                    <span>조회수 ${post.views}</span>
                </div>
            </article>
        `;
    }

    postList.innerHTML = postItemsHtml;
}

renderPosts("전체");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        const category = this.dataset.category;
        renderPosts(category);
    });
}