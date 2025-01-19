
let selectElem = document.querySelector('#theme-selector');
let logo = document.querySelector('#logo');


function changeTheme() {
    if (selectElem.value === 'dark') {
       
        document.body.classList.add('dark');
        logo.src = 'images/byui-logo_white.png'; 
    } else {
        
        document.body.classList.remove('dark');
        logo.src = 'images/byui-logo.png'; 
    }
}

selectElem.addEventListener('change', changeTheme);
