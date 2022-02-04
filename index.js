const toggleButton = document.getElementsByClassName("toggle-button")[0]
const Links = document.getElementsByClassName("navbar-links")[0]
// console.log(Links);

toggleButton.addEventListener("click", ()=> {
    Links.classList.toggle('active')   
})

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null)return

    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if(dropdown === currentDropdown)return
        dropdown.classList.remove('active')
    })

})


let count = 0;
function increment(){
    count  += 1;
    countEl.textContent = count;
}
let countEl = document.getElementById("count-el");


// let c = [1, 6, 38, 100]
// for (let i = 1; i <= 100; i++) {
//     console.log(count[i])
// }