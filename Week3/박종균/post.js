const postDetail=document.querySelector("#post-detail")
const commentSEction=document.querySelector("#comment-section")

function createCommentItemHtml(comment)
{
    return `
        <div class="comment-item">
            <div class="comment-info">
                <strong>${comment.author}</strong>
                <span>${comment.date}</span>
            </div>
            <p>${comment.content}</p>
        </div>
    `
}

function renderComments(comments){
    let commentItemHtml="";
    for(let i=0; i<comments.length; i++)
    {
        commentItemHtml+=createCommentItemHtml(comments[i])
    }

    commentSEction.innerHTML=`
        <h2 class="comment-title">댓글 ${comments.length}개</h2>
        ${commentItemHtml}
    `
}

function renderPost(post)
{
    let contentHtml="";

    for(let i=0; i<post.content.length; i++)
    {
        contentHtml += `<p>${post.content[i]}</p>`
    }

    postDetail.innerHTML=`
        <div class="category">${post.category}</div>
        <h2 class="post-title">${post.title}</h2>

        <div class="post-info">
            <span>작성자: ${post.author}</span>
            <span>작성일: ${post.date}</span>
            <span>조회수: ${post.views}</span>
        </div>

        <div class="post-content">
            ${contentHtml}
        </div>

        <a href="./posts.html" class="btn">목록으로</a>
        `

        renderComments(post.comments);
}

async function renderPostDetail() {
    const params=new URLSearchParams(window.location.search)

    const postID=Number(params.get("id"));

    const selectedPost=await fetchPostById(postID);

    if(!selectedPost)
    {
        postDetail.innerHTML="<p>글을 찾을 수 없습니다.</p>";
        return;
    }

    renderPost(selectedPost)
}

renderPostDetail()