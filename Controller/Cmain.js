
const models = require('../models');

// 메인 페이지 GET
exports.getMain = (req, res) => {
    res.render('index');
}

// 로그인 페이지 GET
exports.getLogin = (req, res) => {
    res.render('login');
}

// 로그인 페이지 로그인 POST 
exports.postLogin = (req, res) => {
    
}

// 회원가입 페이지 렌더링 GET
exports.getSignup = (req, res) => {
    res.render('signup');
}
