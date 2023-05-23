// const writeImg = document.querySelector(".writeImg");
const writeContent = document.querySelector(".writeContent");
const postArea = document.querySelector(".postArea");
const postContentModal = document.querySelector(".postContentModal");
const postContainer = document.querySelectorAll(".postContainer");
const postContainerDetail = document.querySelectorAll(".postContainerDetail");
const postContainerDetailEdit = document.querySelectorAll(
  ".postContainerDetailEdit"
);
const closeDetail = document.querySelectorAll(".closeDetail");
const closeDetailEdit = document.querySelector(".closeDetailEdit");
const share = document.querySelector(".share");
const moveSignin = document.querySelector(".move-signin");

const show = () => {
  writeContent.classList.toggle("noshow");
  postArea.classList.toggle("noshow");
  submitContent.value = "";
  submitPw.value = "";
};

// postDetail 모달 띄우기
for (let i = 0; i < postContainer.length; i++) {
  postContainer[i].addEventListener("click", () => {
    postContainerDetail[i].classList.toggle("noshow");
    postArea.classList.toggle("noshow");
    share.classList.toggle("noshow");
    moveSignin.classList.toggle("noshow");
  });
}

//emoticon 추가
const emoticon = document.querySelectorAll(".emoticon");
for (let i = 0; emoticon.length > i; i++) {
  emoticon[i].addEventListener("click", () => {
    document.querySelector(".submitContent").value += emoticon[i].textContent;
  });
}

// x 누르면 postDetail 모달 지우기
for (let i = 0; i < postContainer.length; i++) {
  closeDetail[i].addEventListener("click", () => {
    postContainerDetail[i].classList.toggle("noshow");
    postArea.classList.toggle("noshow");
    share.classList.toggle("noshow");
    window.location.reload();
  });
}

function copyUrl() {
  let currentUrl = window.document.location.href;

  let t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = currentUrl;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);

  Swal.fire(
    "링크가 복사되었습니다!",
    "친구들에게 공유하여 마음을 받아보세요",
    "success"
  );
}
