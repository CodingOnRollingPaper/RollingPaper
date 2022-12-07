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
//   const postContentModal = document.querySelector(".postContentModal");
// };

// //   postContentModal.classList.remove("noshow");
// //   postArea.classList.add("noshow");
// // };

const PostModal = () => {
  if (postContentModal.classList.contains("noshow")) {
    postContentModal.classList.remove("noshow");
    postArea.classList.add("noshow");
  } else {
    postContentModal.classList.add("noshow");
    postArea.classList.remove("noshow");
  }
};
