const menuIcon = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click',()=>{  
    if (mobileMenu.style.display ==='block'){
        mobileMenu.style.display ='none'; 
    }else {
        mobileMenu.style.display = 'block';
    }
})
