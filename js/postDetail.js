let urlParams = new URLSearchParams(window.location.search);
let postKey = urlParams.get("postkey");

console.log(postKey);

const getPost = (key) => {
  let dbPosts = [];
  $.ajax({
    method: "GET",
    url: `https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/${key}.json`,
    success: (response) => {
      console.log(response);
      dbPosts = response;
      /*for (key in response) {
        dbPosts.push({ id: key, data: response[key] });
      }*/
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  console.log("getPost", dbPosts);
  return dbPosts;
};
console.log(getPost(postKey));

const printPostData = (data) => {
  let {
    content,
    coverUrl,
    creationDate,
    creationTime,
    postId,
    title,
    userId,
  } = data;
  //console.log(data.content);
  $(".post-wrapper div img").attr("src", data.coverUrl);
  $(".post-wrapper div h5").append(data.title);
  $(".content").append(data.content);
  $(".creation").append(data.title);
};
printPostData(getPost(postKey));
