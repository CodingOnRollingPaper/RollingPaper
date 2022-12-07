const { result } = require("lodash");
const models = require("../models");

// 메인 페이지 GET
exports.getMain = (req, res) => {
  res.render("index");
};

// 로그인 페이지 GET
exports.getLogin = (req, res) => {
  res.render("login");
};

// 로그인 페이지 로그인 POST
exports.postLogin = (req, res) => {
  console.log(req.body);
  models.User.findOne({
    where: {
      userId: req.body.userId,
      userPw: req.body.userPw,
    },
  }).then((result) => {
    console.log("로그인 결과", result);
    if (result == null) {
      res.send("로그인에 실패했습니다 아이디나 비밀번호를 확인해주세요");
      return;
    } else {
      req.session.user = {
        isLogin: true,
        userId: req.body.userId,
        userPw: req.body.userPw,
        userName: result.userName,
      };
      console.log(req.session.user);
      res.redirect(`/login/${req.body.userId}`);
    }
  });
};

// 회원가입 페이지 렌더링 GET
exports.getSignup = (req, res) => {
  res.render("signup");
};

// 회원가입 페이지 회원가입 POST
exports.postSignup = (req, res) => {
  console.log(req.body);
  models.User.create({
    userId: req.body.userId,
    userPw: req.body.userPw,
    userName: req.body.userName,
  })
    .then((result) => {
      console.log("회원가입 성공", result);
      res.render("login");
    })
    .catch((result) => {
      console.log("회원가입 실패", result);
      res.render("signup");
    });
};

// 회원가입 페이지 아이디 체크 POST
exports.postIdCheck = (req, res) => {
  let userId = req.body.userId;
  models.User.findOne({
    where: { userId: userId },
  }).then((db_result) => {
    if (db_result === null) {
      res.send({ idCheck: "성공" });
    } else {
      res.send({ idCheck: "실패" });
    }
  });
};

exports.getLoginUserId = (req, res) => {
  console.log("세션 살아있어?", req.session.user);
  res.render("loginUser", {
    userId: req.params.userId,
    userName: req.session.user.userName,
  });
};

// exports.getPaper = (req, res) => {
//   console.log("세션 아직도 살아있어?", req.session.user);
//   res.render("paper", {
//     userName: req.params.userName,
//     userId: req.params.userId,
//   });
//   console.log(req.params.userId);
// };

exports.getPaper = (req, res) => {
  console.log("세션 아직도 살아있어?", req.session.user);
  models.Post.findAll({
    where: {
      userId: req.params.userId,
    },
  }).then((db_result) => {
    console.log("findAll >>", db_result[0].dataValues);
    console.log("findAll >>", db_result[0].dataValues.postContent);

    res.render("paper", {
      data: db_result,
      userName: req.params.userName,
      userId: req.params.userId,
    });
  });

  console.log(req.params.userId);
};

// 게시글 CREATE
exports.createPost = (req, res) => {
  models.Post.create({
    userId: req.body.userId,
    postContent: req.body.postContent,
    postPw: req.body.postPw,
  }).then((db_result) => {
    res.send({
      postId: db_result.dataValues.postId,
      postContent: db_result.dataValues.postContent,
    });
    console.log("결과", db_result);
    console.log("세부결과", db_result.dataValues);
  });

  console.log("여기임", req.body.userId);
};

// 게시글 하나 조회(수정)
exports.getEdit = (req, res) => {
  models.Post.findOne({
    where: {},
  });
};

// 게시글 수정

// 게시글 하나 조회(삭제)

// 게시글 삭제
