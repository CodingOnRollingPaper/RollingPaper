const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");


// 메인 페이지 GET
router.get('/', controller.getMain);

// 로그인 페이지 렌더링 GET
router.get('/login', controller.getLogin);
// 로그인 페이지 로그인 POST
router.post('/login', controller.postLogin);

// 회원가입 페이지 렌더링 GET
router.get('/signup', controller.getSignup);








router.post("/signup", controller.postSignup);

router.get("/login", controller.getLogin); // 로그인페이지 진입

router.post("/login", controller.postLogin); // 로그인페이지에서 로그인

router.get("/paper", controller.getPaper);

module.exports = router;
