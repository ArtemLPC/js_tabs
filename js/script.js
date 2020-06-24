window.addEventListener('DOMContentLoaded', function() {
'use strict';
let infoHeader = document.querySelector('.info-header');
console.log(infoHeader);
let infoHeaderTab = document.getElementsByClassName('info-header-tab');
console.log(infoHeaderTab);
let infoTabcontent = document.getElementsByClassName('info-tabcontent');
console.log(infoTabcontent);

function hideinfoTabcontent (a) {
    for (let i = a; i < infoTabcontent.length; i++) {
        infoTabcontent[i].classList.remove('show');
        infoTabcontent[i].classList.add('hide');
    }
}
hideinfoTabcontent(1);

function showinfoTabcontent(b) {
    for (let i = b; i<infoTabcontent.length; i++) {
        infoTabcontent[i].classList.remove('hide');
        infoTabcontent[i].classList.add('show');
        break;
    }
}


infoHeader.addEventListener('click', function (event) {
    let target = event.target;
    for (let i = 0; i < infoHeaderTab.length; i++) {
        if(target == infoHeaderTab[i]) {
            console.log('yes');
            hideinfoTabcontent(0);
            showinfoTabcontent(i);
        }
    }
});



});