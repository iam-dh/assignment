async function fetchPosts() {
    const response=await fetch("./posts.json");

    return response.json();
}


async function fetchPostById(postId) {
    const posts=await fetchPosts();
    const post=posts.find((p)=>p.id === postId)
    return post;
}