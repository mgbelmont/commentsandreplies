
const savePosts = (event) => {

    let inputTitle = $('#title').val()
    let inputContent = $('#content').val()
    let inputImg = $('#coverUrl').val()

    $.ajax({
      method: "POST",
      url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/.json",
      data: JSON.stringify({
        postId: Date.now(),
        userId: 2,
        title: inputTitle,
        content: inputContent,
        creationDate: moment().format("l"),
        creationTime: moment().format("LT"),
        coverUrl: inputImg,
      }),
      success: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };


  $('#btnAddPost').click(savePosts)

