const button = document.querySelector('.responsive-button');
const responsiveNav = document.querySelectorAll('.responsive-icon');

let click = false;

button.addEventListener('click',function(){
    if (click == false){
        responsiveNav[0].style.display = "flex";
        responsiveNav[1].style.display = "flex";
        responsiveNav[2].style.display = "flex";
        responsiveNav[3].style.display = "flex";
        responsiveNav[4].style.display = "flex";
        click = true;
    }
    else if (click == true){
        responsiveNav[0].style.display = "none";
        responsiveNav[1].style.display = "none";
        responsiveNav[2].style.display = "none";
        responsiveNav[3].style.display = "none";
        responsiveNav[4].style.display = "none";
        click = false;      
    }
})