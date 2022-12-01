const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// 메인 페이지 GET
router.get("/", controller.getMain);

// 로그인 페이지 렌더링 GET
router.get("/login", controller.getLogin);

// 로그인 페이지 로그인 POST
router.post("/login", controller.postLogin);

// 회원가입 페이지 렌더링 GET
router.get("/signup", controller.getSignup);

// 회원가입 페이지 아이디 체크 POST
router.post('/signup/idCheck', controller.postIdCheck);

// 회원가입 페이지 회원가입 POST
router.post("/signup", controller.postSignup);

// 게시글 작성 페이지 GET
router.get("/paper", controller.getPaper);

module.exports = router;
