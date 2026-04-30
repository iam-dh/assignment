async function fetchPosts() {
  try {
    const response = await fetch("./posts.json");

    // 응답이 성공적이지 않을 때 (예: 404, 500 에러)
    if (!response.ok) {
      throw new Error(`데이터를 불러오는데 실패했습니다. (상태 코드: ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    // 네트워크 연결 오류나 JSON 파싱 오류 처리
    console.error("fetchPosts 에러:", error);
    throw error; // 에러를 호출한 쪽(posts.js, post.js)으로 던져서 UI 처리를 유도함
  }
}

async function fetchPostById(postId) {
  try {
    const posts = await fetchPosts();
    const post = posts.find((post) => post.id === postId);
    return post;
  } catch (error) {
    console.error(`fetchPostById(${postId}) 에러:`, error);
    return null; // 에러 발생 시 null 반환
  }
}