let postsData = {
  post1: {
    postId: 1,
    userId: 1,
    title: "Post 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
    coverUrl: "https://picsum.photos/id/237/768/384",
  },
  post2: {
    postId: 2,
    userId: 2,
    title: "Post 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!",
    creationDate: "10/03/2021",
    creationTime: "09:00",
    coverUrl: "https://picsum.photos/id/238/768/384",
  },
  post3: {
    postId: 3,
    userId: 3,
    title: "Post 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!",
    creationDate: "09/02/2021",
    creationTime: "15:00",
    coverUrl: "https://picsum.photos/id/239/768/384",
  },
};

let replies = {
  reply1: {
    userId: 1,
    post: 1,
    content: "Excelente post!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
  },
  reply2: {
    userId: 2,
    post: 1,
    content: "Excelente post!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
  },
  reply3: {
    userId: 1,
    post: 2,
    content: "Excelente post!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
  },
  reply4: {
    userId: 3,
    post: 2,
    content: "Excelente post!",
    creationDate: "14/04/2021",
    creationTime: "19:00",
  },
  reply5: {
    userId: 1,
    post: 3,
    content: "Excelente post!",
    creationDate: "06/04/2021",
    creationTime: "11:00",
  },
};

let users = {
  user1: {
    userId: 1,
    name: "Israel Salinas Martínez",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_GWXfBquADFDLyNnozk3UK_hsS10IvQMlQ",
  },
  user2: {
    userId: 2,
    name: "Mariana Limon",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8",
  },
  user3: {
    userId: 3,
    name: "Jaime Rodríguez",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8",
  },
};

//console.log(Date.now())
/*
https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/.json
https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/replies/.json
https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/.json
*/
const deleteUser = (key) => {
  $.ajax({
    method: "DELETE",
    url: `https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/${key}.json`,

    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

const savePosts = () => {
  $.ajax({
    method: "POST",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/.json",
    data: JSON.stringify({
      postId: 3,
      userId: 3,
      title: "Post 3",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!",
      creationDate: "09/02/2021",
      creationTime: "15:00",
      coverUrl: "https://picsum.photos/id/239/768/384",
    }),
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

const saveReplies = (event) => {
  $(event.target).data("mentorkey");
  $.ajax({
    method: "POST",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/replies/.json",
    data: JSON.stringify({
      userId: 1,
      post: 3,
      content: "Excelente post!",
      creationDate: "06/04/2021",
      creationTime: "11:00",
    }),
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

const saveUsers = () => {
  $.ajax({
    method: "POST",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/.json",
    data: JSON.stringify({
      userId: 4,
      name: "Mariana García",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8",
    }),
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

/*get posts*/
const getPosts = () => {
  let dbPosts = [];
  $.ajax({
    method: "GET",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/posts/.json",
    success: (response) => {
      console.log(response);
      //dbPosts = response
      for (key in response) {
        dbPosts.push({ id: key, data: response[key] });
      }
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  console.log("getPosts", dbPosts);
  return dbPosts;
};

//let otherData = getPosts()
//console.log( otherData )

/*get Replies*/
const getReplies = () => {
  let dbReplies;
  $.ajax({
    method: "GET",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/replies/.json",
    success: (response) => {
      //console.log(response)
      dbReplies = response;
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  // console.log( d bData )
  return dbReplies;
};

//let otherData = getReplies()
//console.log( otherData )

/*get Users*/
const getUsers = () => {
  let dbUsers;
  $.ajax({
    method: "GET",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/.json",
    success: (response) => {
      //console.log(response);
      dbUsers = response;
    },
    error: (error) => {
      console.log(error);
    },
    async: false,
  });

  // console.log( d bData )
  return dbUsers;
};
const getUser = (userId) => {
  let newUser = {};
  let users = getUsers();
  for (key in users) {
    if (users[key].userId == userId) {
      newUser["name"] = users[key].name;
      newUser["avatar"] = users[key].avatar;
      newUser["userId"] = users[key].userId;
    }
  }

  return newUser;
};
const getUserLogin = () => {
  let newUser = {};
  let users = getUsers();
  for (key in users) {
    if (users[key].login == "1") {
      newUser["name"] = users[key].name;
      newUser["avatar"] = users[key].avatar;
      newUser["userId"] = users[key].userId;
      newUser["key"] = key;
    }
  }
  $("#change-user option[value=" + newUser.key + "]").attr("selected", true);
  return newUser;
};
const saveReplie = (event) => {
  let postId = $(event.target).data("commentkey");
  let comment = $(`.reply-comment-${postId} form div input`).val();
  let userLogin = getUserLogin();
  //let message = `<div class="error-comment">Ingresa un comentario<div>`;
  //$(`#replies-wrapper-${postId}`).append(message);
  //console.log(moment().format("LT"));

  $.ajax({
    method: "POST",
    url: "https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/replies/.json",
    data: JSON.stringify({
      content: comment,
      creationDate: moment().format("l"),
      creationTime: moment().format("LT"),
      post: postId,
      userId: userLogin.userId,
    }),
    success: (response) => {
      console.log(response);
      printReplies(postId);
      $(`.reply-comment-${postId} form`)[0].reset();
    },
    error: (error) => {
      console.log(error);
    },
  });
};
//let otherData = getUsers()
//console.log( otherData )
const logoutUser = (key) => {
  let urlString = `https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/${key}.json`;
  $.ajax({
    method: "PATCH",
    url: urlString,
    data: JSON.stringify({
      login: 0,
    }),
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

const loginUser = (event) => {
  let userLogin = $("#change-user option:selected").val();
  let users = getUsers();
  for (key in users) {
    //console.log(users[key].login);
    if (users[key].login == "1") {
      logoutUser(key);
      console.log("Usuario anterior", users[key].name);
    }
  }

  let urlString = `https://ajaxclass-1ca34.firebaseio.com/11g/teamcm/users/${userLogin}.json`;
  $.ajax({
    method: "PATCH",
    url: urlString,
    data: JSON.stringify({
      login: 1,
    }),
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

const selectUsers = () => {
  let users = getUsers();
  for (key in users) {
    $("#change-user").append(
      $("<option>", {
        value: key,
        text: users[key].name,
      })
    );
  }
};

selectUsers();

const printUser = (userId) => {
  let user = getUser(userId);
  //console.log(user.avatar);
  return `<div class="autor">
  <img src="${user.avatar}" alt=""> 
  <span class="comment-autor text-blue"><small>&nbsp ${user.name}</small></span>
  </div>`;
};

const printReplies = (postId) => {
  $(`#replies-wrapper-${postId} li`).remove();
  let replies = getReplies();
  let copy = { ...replies };
  let countReplies = 0;
  for (key in replies) {
    if (replies[key].post === postId) {
      countReplies++;
      //let user = getUser(replies[key].userId);
      //console.log(user.avatar);
      // console.log("traeusercomment", user);

      let h3Id = Date.now();

      let liHTML = `<li class="list-group-item">
                                <div class="reply-box">
                                    <h3 id="${h3Id}"></h3>
                                    
                                    <p class="mb-0 text-muted comment-text">${replies[key].content}</p>
                                    <p class="mb-0 text-right text-muted comment-date">
                                        <span class="date">${replies[key].creationDate}</span> 
                                        <span class="time">${replies[key].creationTime}</span>   
                                    </p>
                                </div>
                            </li>
                        `;
      // console.log(ulHtml)
      /*
      let ulHTML = document.createElement("ul");
      ulHTML.classList = "list-group bg-white border rounded m-2";

      $(ulHTML).append(liHTML);*/

      let repWrapp = `#replies-wrapper-${postId}`;

      $(repWrapp).prepend(liHTML);

      //print user
      let userinfo = printUser(replies[key].userId);
      $(`#${h3Id}`).append(userinfo);
    }
  }
  // INICIA FUNCION PARA MOSTRAR U OCULTAR LOS COMENTARIOS. Mostrando solo el primero
  $(`#replies-wrapper-${postId} .list-group-item`).first().removeClass("list-group-item");
  $(`#replies-wrapper-${postId} li`).first().addClass("first-list-item");

  var news = 0;

  hidenews = "- Hide comments";
  shownews = `+ Show more comments `;
  //console.log("mis replies", countReplies);

  if (countReplies > 1) {
   // leemos cada archive dentro de su respectivo wrapper para hacer el conteo de los comments 
  $(`#replies-wrapper-${postId} .archive`).html(`${shownews} (${countReplies})`);
  }

  $(`#replies-wrapper-${postId} .list-group-item`).hide();

  

  $(`#replies-wrapper-${postId} .archive`).click(function (e) {
    e.preventDefault();
    var $container = $(e.currentTarget).closest(`#replies-wrapper-${postId}`);
    if ($container.find(".list-group-item:eq(" + news + ")").is(":hidden")) {
      $container.find(".list-group-item:not(:lt(" + news + "))").slideDown();
      $container.find(".archive").html(hidenews);
    } else {
      $container.find(".list-group-item:not(:lt(" + news + "))").slideUp();
      // volvemos a imrpimir el conteo de los cooments
      $container.find(".archive").html(`${shownews} (${countReplies})`);
    }

    $(repWrapp).prepend(liHTML);
  });
  // ACABA FUNCION
};

const printPosts = (postsArray) => {
  postsArray.forEach((post, index) => {
    //clean posts wrapper
    //$('#posts-wrapper .card').remove();

    let userContainerId = Date.now();

    $("#posts-wrapper").prepend(
      `<div class="card mb-3 shadow">
          <div class="bg-white p-3 mb-3 row no-gutters">
            <div class="col-md-4">
                <img class="post-list-image rounded-left" src="${post.data.coverUrl}" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                  <a href="/views/postDetail.html?postkey=${post.id}" target="_blank"><h5 class="card-title text-blue">${post.data.title}</h5></a>
                  <p class="card-text">${post.data.content}</p>
                  <p class="card-text mb-0">
                  <small class="text-muted">Created: <span class="text-dark">${post.data.creationDate} ${post.data.creationTime}</span></small></p>
                  <p class="card-text px-0 py-2 mb-0" id="${userContainerId}"></p>
                </div>
            </div>
          </div>
          
          <ul class="replies-wrapper bg-light p-3" id="replies-wrapper-${post.data.postId}" >
          <a class="archive text-muted" href="#"></a>
          </ul>
          <!--replies-->
          <div class="reply-form reply-comment-${post.data.postId}">
              <form action="">
                  <div class="form-group d-flex m-3">
                      <input type="text" class="form-control comment-input" placeholder="Escribe un comentario">
                      <button type="button" class="btn btn-primary btn-save-replie" data-commentkey="${post.data.postId}" disabled>Comentar</button>
                  </div>
              </form>
          </div>
        </div>        
      `
    );

    let repliesObject = printReplies(post.data.postId);
    //print user
    let userinfo = printUser(post.data.userId);
    $(`#${userContainerId}`).append(userinfo);
  });
};
printPosts(getPosts());

//printReplies(2);
/*
let miusuario = getUser(1);
console.log(miusuario.name);
console.log("found: ", getUser(1));*/
const activeComment = (event) => {
  let comment = $(event.target).val().trim();
  let lengthComment = comment.length;
  //console.log(lengthComment);
  lengthComment >= 3 && comment != ""
    ? $(event.target).next("button").attr("disabled", false)
    : $(event.target).next("button").attr("disabled", true);
};

$(".comment-input").keyup(activeComment);

$(".btn-save-replie").click(saveReplie);

const goAddPost = () => {
  $(location).attr("href", "/views/addPost.html");
};

$("#go-add-post").click(goAddPost);
$("#go-add-post-mob").click(goAddPost);

console.log(getUserLogin());
$("#change-user").on("change", loginUser);

/* $("#go-add-user").click(function () {
  console.log("entrA");
  var src = "views/addUser.html";
  $("#myModal").modal("show");
  $("#myModal iframe").attr("src", src);
}); */

/* $("#go-add-user-mob").click(function () {
  console.log("entrA");
  var src = "views/addUser.html";
  $("#myModal").modal("show");
  $("#myModal iframe").attr("src", src);
}); */

const goAddUser = () => {
  $(location).attr("href", "/views/addUser.html");
};

$("#go-add-user").click(goAddUser);
$("#go-add-user-mob").click(goAddUser);

$("#myModal button").click(function () {
  $("#myModal iframe").removeAttr("src");
});
