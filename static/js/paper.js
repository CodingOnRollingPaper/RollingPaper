const writeImg = document.querySelector(".writeImg");
const writeContent = document.querySelector(".writeContent");
const postArea = document.querySelector(".postArea");
const postContentModal = document.querySelector(".postContentModal");

const show = () => {
  if (writeContent.classList.contains("noshow")) {
    writeContent.classList.remove("noshow");
    postArea.classList.add("noshow");
  } else {
    writeContent.classList.add("noshow");
    postArea.classList.remove("noshow");
  }
};

// const postModal = () => {
//   let modalPostId = document.querySelectorAll(".postId");
//   // console.log(modalPostId);
//   let modalPostContent = document.querySelectorAll(".postContent");
//   let textArea = document.querySelectorAll(".textArea");
//   console.log(textArea);
//   for (let i = 0; i < textArea.length; i++) {
//     let modalContents = `<div class="close" onclick="closePostModal()">
//             <div>X</div>
//           </div>
//           <div>${modalPostId[i].innerText}번째 마음</div>
//           <div>${modalPostContent[i].innerText}</div>
//           <div class="postBtn">
//           <button>수정</button>
//           <button>삭제</button>
//           </div>`;
//     postContentModal.innerHTML = modalContents;
//   }

//   postContentModal.classList.remove("noshow");
//   postArea.classList.add("noshow");
// };

const closePostModal = () => {
  if (postContentModal.classList.contains("noshow")) {
    postContentModal.classList.remove("noshow");
    postArea.classList.add("noshow");
  } else {
    postContentModal.classList.add("noshow");
    postArea.classList.remove("noshow");
  }
};
