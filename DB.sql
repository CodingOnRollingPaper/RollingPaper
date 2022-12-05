-- 데이터 베이스 생성
CREATE DATABASE rolling_paper DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 유저 테이블 생성 USER
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(30) NOT NULL UNIQUE,
    userPw VARCHAR(30) NOT NULL,
    userName VARCHAR(30) NOT NULL
);


-- 게시글 테이블 생성 POST
CREATE TABLE post (
postId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userId VARCHAR(30) NOT NULL, --foreing key
FOREIGN KEY(userId) REFERENCES user(userId) ON UPDATE CASCADE ON DELETE CASCADE,
postContent VARCHAR(255)  NOT NULL,
postPw VARCHAR(30) NOT NULL
);

SHOW databases;

USE rolling_paper

SHOW tables;

DESC user;

DESC post;

SELECT * FROM user;

SELECT * FROM post;

SELECT * FROM post WHERE userId = req.session.userId;

-- 개인페이지에 남기는 Create
INSERT INTO post (??, postContent, postPw) VALUES('??', '몰라몰라', '비밀번호');

