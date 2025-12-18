const url = new URL(window.location.href);

const urlParams = url.searchParams;

const postId = urlParams.get("postId");
console.log(postId);
