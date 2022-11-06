// menu start
const sidebarBtn = document.getElementById("sidebarBtn");
const sidebar = document.getElementById("sidebar");

const addBtn = document.getElementById("addBtn");
const addUser = document.getElementById("addUser");
const addConfirm = document.getElementById("addConfirm");

const importBtn = document.getElementById("importBtn");
const importUser = document.getElementById("importUser");
const importConfirm = document.getElementById("importConfirm");
const importCancel = document.getElementById("importCancel");

const selectBtn = document.getElementById("selectBtn");
const selectUser = document.getElementById("selectUser");
const selectConfirm = document.getElementById("selectConfirm");
const selectCancel = document.getElementById("selectCancel");

const editItemBtn = document.getElementById("editItemBtn");
const editItem = document.getElementById("editItem");
const editItemConfirm = document.getElementById("editItemConfirm");
const editItemCancel = document.getElementById("editItemCancel");

const previewBallotBtn = document.getElementById("previewBallotBtn");
const previewBallot = document.getElementById("previewBallot");
const ballotClose = document.getElementById("ballotClose");
const ballotRemove = document.getElementById("ballotRemove");

const questionBtn = document.getElementById("questionBtn");
const addQuestion = document.getElementById("addQuestion");
const questionClose = document.getElementById("questionClose");

const alertBtn = document.getElementsByClassName(".alertBtn");
const confirmBox = document.getElementById("confirm");
const confirmClose = document.getElementById("confirmClose");
const confirmChange = document.getElementById("confirmChange");

let body = document.body;

const changeAvatar = document.getElementById("changeAvatar");
const imageInput = document.getElementById("imageInput");
const itemName = document.getElementById("itemName");
const description = document.getElementById("description");
const tableBody = document.getElementById("tableBody");
if (changeAvatar) {
  changeAvatar.onchange = (e) => {
    const [file] = changeAvatar.files;
    if (file) {
      myAvatar.src = URL.createObjectURL(file);

      imageInput.classList.add("active");
    }
  };
}

const addNewItem = (data) => {
  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `   
    <td class="draggable">
      <svg>
        <use xlink:href="#drag"></use>
      </svg>
    </td>
    <td>
      <div class="listItems">
        <span>
          <img src="${data.avatar}" alt="">
        </span>
        <h3>
          ${data.name}
        </h3>
        <p>
        ${data.description}
        </p>
      </div>
    </td>
    <td>
      <div class="button__row">
        <button class="button secondary">
          <svg>
            <use xlink:href="#pen"></use>
          </svg>
          Edit
        </button>
        <button class="button close">
          <svg>
            <use xlink:href="#delete"></use>
          </svg>
        </button>
      </div>
    </td>
    `;
  tableBody.insertBefore(tableRow, tableBody.firstChild);
  tableRow.style.animationName = "fadeUp";
  tableRow.style.animationDuration = ".4s";
};

const eChangeAvatar = document.getElementById("eChangeAvatar");
const eImageInput = document.getElementById("eImageInput");

if (eChangeAvatar) {
  eChangeAvatar.onchange = (e) => {
    const [file] = eChangeAvatar.files;
    if (file) {
      eMyAvatar.src = URL.createObjectURL(file);
      eImageInput.classList.add("active");
    }
  };
}
const inputFiles = document.querySelectorAll(".input.file");
inputFiles.forEach((inputFile) => {
  const itemImage = inputFile.querySelector("img");
  const itemInput = inputFile.querySelector("input");
  itemInput.onchange = (e) => {
    const [file] = itemInput.files;
    if (file) {
      itemImage.src = URL.createObjectURL(file);
    }
  };
});

if (eChangeAvatar) {
  eChangeAvatar.onchange = (e) => {
    const [file] = eChangeAvatar.files;
    if (file) {
      eMyAvatar.src = URL.createObjectURL(file);
      eImageInput.classList.add("active");
    }
  };
}

sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  window.onclick = function (e) {
    if (e.target == sidebar) {
      sidebar.classList.remove("active");
    }
  };
};

const addRemoveFunc = () => {
  addUser.classList.remove("active");
  body.classList.remove("active");
};
const importRemoveFunc = () => {
  importUser.classList.remove("active");
  body.classList.remove("active");
};
const selectRemoveFunc = () => {
  selectUser.classList.remove("active");
  body.classList.remove("active");
};
const editItemRemoveFunc = () => {
  editItem.classList.remove("active");
  body.classList.remove("active");
};
const previewBallotRemoveFunc = () => {
  previewBallot.classList.remove("active");
  body.classList.remove("active");
};
const addQuestionRemoveFunc = () => {
  addQuestion.classList.add("disappear");

  setTimeout(() => {
    addQuestion.classList.remove("active");

    body.classList.remove("active");
  }, 300);
};
const alertRemoveFunc = () => {
  confirmBox.classList.remove("active");
  body.classList.remove("active");
};

const table = document.getElementById("table");
if (addConfirm) {
  addConfirm.onclick = () => {
    let name = document.querySelector("#itemName").value;
    let description = document.querySelector("#description").value;
    let avatar = imageInput.querySelector(".input__avatar-image > img").src;
    addNewItem({
      name: name,
      description: description,
      avatar: avatar,
    });
    addRemoveFunc();
    draggableTable(table);
  };
}

if (addBtn) {
  addBtn.onclick = function () {
    addUser.classList.toggle("active");
    body.classList.toggle("active");
  };

  addCancel.onclick = () => addRemoveFunc();
}

if (importBtn) {
  importBtn.onclick = function () {
    importUser.classList.toggle("active");
    body.classList.toggle("active");
  };
  importConfirm.onclick = () => importRemoveFunc();
  importCancel.onclick = () => importRemoveFunc();
}

if (selectBtn) {
  selectBtn.onclick = function () {
    selectUser.classList.toggle("active");
    body.classList.toggle("active");
  };
  selectConfirm.onclick = () => selectRemoveFunc();
  selectCancel.onclick = () => selectRemoveFunc();
}

if (editItemBtn) {
  editItemBtn.onclick = function () {
    editItem.classList.toggle("active");
    body.classList.toggle("active");
  };
  editItemConfirm.onclick = () => editItemRemoveFunc();
  editItemCancel.onclick = () => editItemRemoveFunc();
  window.addEventListener("click", function (e) {
    if (e.target == editItem) {
      editItemRemoveFunc();
    }
  });
}

if (previewBallotBtn) {
  previewBallotBtn.onclick = function () {
    previewBallot.classList.toggle("active");
    body.classList.toggle("active");
  };
  ballotClose.onclick = () => previewBallotRemoveFunc();
  ballotRemove.onclick = () => previewBallotRemoveFunc();
  window.addEventListener("click", function (e) {
    if (e.target == previewBallot) {
      previewBallotRemoveFunc();
    }
  });
}

if (questionBtn) {
  questionBtn.onclick = function () {
    addQuestion.classList.remove("disappear");

    addQuestion.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.addEventListener("click", function (e) {
    if (e.target == addQuestion) {
      addQuestionRemoveFunc();
    }
  });
  questionClose.onclick = () => addQuestionRemoveFunc();

  const questionItems = document.querySelectorAll(".questionItem__footer");
  questionItems.forEach((questionItem) => {
    let questionItemCanel = questionItem.querySelector(".button.previous");
    questionItemCanel.addEventListener("click", () => {
      addQuestion.classList.remove("active");
      body.classList.remove("active");
    });
  });
}

window.addEventListener("click", function (event) {
  if (
    event.target == addUser ||
    event.target == importUser ||
    event.target == selectUser
  ) {
    importRemoveFunc();
    addRemoveFunc();
    selectRemoveFunc();
  }
});

// users groups tab

const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }

    const questionItems = document.querySelectorAll(".questionItem");
    questionItems.forEach((questionItem) => {
      const previousBtns = questionItem.querySelectorAll(".button.previous");
      previousBtns[1].onclick = () => {
        currentBtn.classList.remove("active");
        currentTab.classList.remove("active");
      };
    });
  });
}
const introNav = document.getElementById("introNav");

if (introNav) {
  const links = document.querySelectorAll(".links");
  const sections = document.querySelectorAll(".anchor");
  const asd = document.querySelector(".intro__inner-main");
  function changeLinkState() {
    let index = sections.length;
    while (--index && asd.scrollTop + 100 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("active"));
    links[index]?.classList.add("active");
  }

  asd.onscroll = function () {
    changeLinkState();
  };
}

const securityCheck = document.getElementById("securityCheck");
const securityItem = document.getElementById("securityItem");
const securityWrapper = document.getElementById("securityWrapper");

if (securityCheck) {
  securityCheck.onchange = (e) => {
    securityItem.classList.toggle("active");
    securityWrapper.classList.toggle("active");
  };
}

const checkNoteFunc = () => {};
const introItemNotes = document.querySelectorAll(".introItem.note");

introItemNotes.forEach((introItemNote) => {
  const introItemNotesCheck = introItemNote.querySelector(
    "input[type='checkbox']"
  );
  if (introItemNote.classList.contains("two")) {
    const myWrappers = introItemNote.querySelectorAll(
      ".introItem__tools-wrapper"
    );
    myWrappers.forEach((myWrapper) => {
      const myCheck = myWrapper.querySelector("input[type='checkbox']");
      myCheck.onchange = (e) => {
        myWrapper.classList.toggle("active");
      };
    });
  } else {
    introItemNotesCheck.onchange = (e) => {
      introItemNote.classList.toggle("active");
    };
  }
});
