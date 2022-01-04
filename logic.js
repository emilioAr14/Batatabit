// tables id
let mainTbls = document.querySelector('.main__tables')
let commissionTbl = document.querySelector('#commissionTbl');
let currencyTbl = document.querySelector('#currencyTbl');

// scroll-buttons id
let scrollBtnRight = document.querySelector('#scrollBtnRight');
let scrollBtnLeft = document.querySelector('#scrollBtnLeft');

// scroll functions
scrollBtnRight.addEventListener("click",() => {
currencyTbl.style.opacity = "0";
commissionTbl.style.opacity = "1";
});

scrollBtnLeft.addEventListener("click",() => {
commissionTbl.style.opacity = "0";
currencyTbl.style.opacity = "1";
});
