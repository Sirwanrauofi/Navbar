// ********************************************************    Mini project (** Navbar **) by Naser Raoofi   ***************************************************************************
const btn=document.querySelector('.nav-toggle');
const drawNav=document.querySelector('.links')

btn.addEventListener('click',()=>{
    drawNav.classList.toggle('show-links')
})