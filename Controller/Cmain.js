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
        userId: req.body.Id,
        userPw: req.body.Pw,
        userName: result.userName,
      };
      console.log(req.session.user);
      res.redirect("/main");
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
