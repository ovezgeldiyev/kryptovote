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

let body = document.body;

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







function FirstJob(){
  myPic = document.getElementById('refImage');
  myPic.addEventListener("dragstart", startDrag, false);
  cloRef1 = document.getElementById('tr1_1');
//  cloRef2 = document.getElementByID('tr1_2');
//  cloRef3 = document.getElementByID('tr2_1');
//  cloRef4 = document.getElementByID('tr2_2');

  cloRef1.addEventListener("dragenter", function(e){e.preventDefault();}, false);
  cloRef1.addEventListener("dragover", function(e){e.preventDefault();} , false);
  cloRef1.addEventListener("drop", dropped , false);
}

function startDrag(e){
  // save information about our element over the event startDrag
  var varImg = '<center><img id="refImage" src="http://media.idownloadblog.com/wp-content/uploads/2014/11/Google-Maps-4.0-for-iOS-app-icon-small.png"></center>';
  e.dataTransfer.setData('myImg', varImg);
}

function dropped(e){
  e.preventDefault();
  cloRef1.innerHTML = e.dataTransfer.getData('myImg');
}
window.addEventListener("load", FirstJob, false);