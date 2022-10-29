
function selectMenuItem(e) {
    const menuItems = document.getElementsByClassName("menu-item");
    for(let item of menuItems) {
        item.classList.remove("focused");
    }
    this.classList.add("focused");
}

window.onload = () => {
    const menuItems = document.getElementsByClassName("menu-item");
    for(let item of menuItems) {
        item.addEventListener("click", selectMenuItem);
    }

    const cbs = document.getElementsByClassName("menu-head-cb");
    for (let cb of cbs) {
        cb.addEventListener("input", ()=>{
            const contents = cb.parentElement.getElementsByClassName("menu-content");
            let height = 0;
            for (let child of contents[0].children) {
                height += child.offsetHeight;
            }
            contents[0].style.height = cb.checked ? height + "px": "0px";
        });
        cb.checked = false;
        cb.click();
    }
};
