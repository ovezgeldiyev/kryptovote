// menu start
const sidebarBtn = document.getElementById("sidebarBtn");
const sidebar = document.getElementById("sidebar");

const addBtn = document.getElementById("addBtn");
const addUser = document.getElementById("addUser");
const addConfirm = document.getElementById("addConfirm");
const addCancel = document.getElementById("addCancel");

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

let body = document.body;

const changeAvatar = document.getElementById("changeAvatar");
const imageInput = document.getElementById("imageInput");

if(changeAvatar) {
  changeAvatar.onchange = e => {
    const [file] = changeAvatar.files;
    if (file) {
      myAvatar.src = URL.createObjectURL(file);
      imageInput.classList.add("active");
    }
  }
}

sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    window.onclick = function (e) {
        if (e.target == sidebar) {
            sidebar.classList.remove("active");
        }
    };
};

const addRemoveFunc = ()=> {
    addUser.classList.remove("active");
    body.classList.remove("active");
}
const importRemoveFunc = ()=> {
    importUser.classList.remove("active");
    body.classList.remove("active");
}
const selectRemoveFunc = ()=> {
    selectUser.classList.remove("active");
    body.classList.remove("active");
}
const editItemRemoveFunc = ()=> {
  editItem.classList.remove("active");
  body.classList.remove("active");
}
if(addBtn) {
    addBtn.onclick = function () {
        addUser.classList.toggle("active");
        body.classList.toggle("active");
    };
    addConfirm.onclick = () => addRemoveFunc();
    addCancel.onclick = () => addRemoveFunc();
}

if(importBtn) {
    importBtn.onclick = function () {
        importUser.classList.toggle("active");
        body.classList.toggle("active");
    };
    importConfirm.onclick = () => importRemoveFunc();
    importCancel.onclick = () => importRemoveFunc();
}

if(selectBtn) {
    selectBtn.onclick = function () {
        selectUser.classList.toggle("active");
        body.classList.toggle("active");
    };
    selectConfirm.onclick = () => selectRemoveFunc();
    selectCancel.onclick = () => selectRemoveFunc();
}

if(editItemBtn) {
  editItemBtn.onclick = function () {
    editItem.classList.toggle("active");
      body.classList.toggle("active");
  };
  editItemConfirm.onclick = () => editItemRemoveFunc();
  editItemCancel.onclick = () => editItemRemoveFunc();
  window.addEventListener("click", function (e) {
    if (e.target == editItem) {
        editItemRemoveFunc();
    };
});
}
window.addEventListener("click", function (event) {
    if (event.target == addUser || event.target == importUser || event.target == selectUser) {
        importRemoveFunc();
        addRemoveFunc();
        selectRemoveFunc();
    };
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
      console.log("now active");
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
  });
}




function slist (target) {
  // (A) SET CSS + GET ALL LIST ITEMS
  target.classList.add("slist");
  let items = target.getElementsByTagName("tr"), current = null;

  // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    i.draggable = true;
    
    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    i.ondragstart = (ev) => {
      current = i;
      for (let it of items) {
        if (it != current) { it.classList.add("hint"); }
      }
    };
    
    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.ondragenter = (ev) => {
      if (i != current) { i.classList.add("active"); }
    };

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.ondragleave = () => {
      i.classList.remove("active");
    };

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    i.ondragend = () => { for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
    }};
 
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.ondragover = (evt) => { evt.preventDefault(); };
 
    // (B7) ON DROP - DO SOMETHING
    i.ondrop = (evt) => {
      evt.preventDefault();
      if (i != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (i == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }
    };
  }
}


window.addEventListener("DOMContentLoaded", () => {
  slist(document.getElementById("sortlist"));
});


