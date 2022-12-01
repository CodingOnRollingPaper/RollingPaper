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

// 회원가입 페이지 아이디 체크 POST
exports.postIdCheck = (req, res) => {
    let userId = req.body.userId;
    models.User.findOne({
        where : { userId : userId}
    })
    .then((db_result) => {
        if(db_result === null) {
            res.send({ idCheck: '성공'});
        }
        else {
            res.send({ idCheck: '실패'});
        }
    })
}