const menuIcon = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click',()=>{  
    if (mobileMenu.style.display ==='block'){
        mobileMenu.style.display ='none'; 
    }else {
        mobileMenu.style.display = 'block';
    }
})
document.addEventListener('DOMContentLoaded',function(){
    const links=document.querySelectorAll('.footer-link');
    links.forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault();
            console.log("link.clicked:",link.textContent);
        })
    })
})


