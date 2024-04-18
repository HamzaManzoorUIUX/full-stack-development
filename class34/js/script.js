// const userName = document.getElementById("userName")
// console.log(userName);
// userName.value="Hamza Manzoor"
// console.log(userName.value);
// userName.addEventListener("keydown", () => {
//     console.log('Hamza', userName);
// })
// const submitbtn=document.querySelector('button')
// console.log("submitbtn", submitbtn.classList);
// submitbtn.classList.add("btn-primary")
// console.log("submitbtn", submitbtn.classList);
const menuTriggerBtn = document.querySelector('.menuTriggerBtn')
// console.log('menuTriggerBtn',menuTriggerBtn);
menuTriggerBtn.addEventListener("click", () => {
    const sideNavBar = document.querySelector('.side-nav-bar')
    if (sideNavBar.style.left === '0px') {
        sideNavBar.style.left = "-100%"
        sideNavBar.style.opacity = "0"
    }
    else {
        sideNavBar.style.left = 0
        sideNavBar.style.opacity = "1"
    }
})