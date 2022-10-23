// // menu start
// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
// // menu end
// // scroll start
// let header = document.getElementById("header");
// function scrollFunc() {
//   if (window.pageYOffset >= 60) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// const links = document.querySelectorAll(".links");
// const sections = document.querySelectorAll(".anchor");
// function changeLinkState() {
//   let index = sections.length;
//   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
//   links.forEach((link) => link.classList.remove("active"));
//   links[index]?.classList.add("active");
// }
// links.forEach((e) => {
//   onLinkClick(e);
// });
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// window.onscroll = function () {
//   changeLinkState();
//   scrollFunc();
// };
// // scroll end



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

window.onclick = function (event) {
    if (event.target == importUser || event.target == addUser) {
        importRemoveFunc();
        addRemoveFunc();
        selectRemoveFunc();
    }
};







