const nav_link = document.querySelectorAll('.menu>li');

for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener('mouseout',()=>{
        nav_link[i].classList.remove('active');
    })
    
}
nav_link.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        e.classList.add('active');
    })
})


// <!-- // popup contact  -->
const popup_x = document.querySelector('.ct-x');
const popup_ct = document.getElementById('ct');
const popup_in = document.getElementById('ct_in');

popup_in.addEventListener('click',()=>{
    popup_ct.classList.add('active')
})
popup_x.addEventListener('click',()=>{
    popup_ct.classList.remove('active')
})
// <!-- // popup search  -->
const popup_sx = document.querySelector('.s-x');
const popup_sct = document.getElementById('se');
const popup_si = document.getElementById('se_in');

popup_si.addEventListener('click',()=>{
    popup_sct.classList.add('active')
})
popup_sx.addEventListener('click',()=>{
    popup_sct.classList.remove('active')
})

//mobile
const menu_mb = document.querySelector(".x-mb");
const nav_mb = document.querySelector(".header-mobile");
const icon_nav_mb = document.querySelector(".icon-menu-mb");
console.log(menu_mb);
console.log(menu_mb);
icon_nav_mb.addEventListener("click",()=>{
    nav_mb.classList.add("active");
});

menu_mb.addEventListener("click",()=>{
    nav_mb.classList.remove("active");
});
 