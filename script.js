'use strict';

const body = document.querySelector('body');
const btn = document.querySelector('.h-btn');
const mainSection = document.querySelector('.main-section')
const secondSection = document.querySelector('.second-section')

const submit = document.querySelector('.submit')
const submit2 = document.querySelector('.submit2');

const modal = document.querySelector('.modal');

const email = document.querySelector('#email2')
const user = document.querySelector('#F-name')


btn.addEventListener('click', function(){
    mainSection.classList.add('hidden');
    secondSection.classList.remove('hidden');
})

submit2.addEventListener('click', function(e){
    e.preventDefault();
})

submit.addEventListener('click', function(e){
    e.preventDefault();
    mainSection.style.opacity = '0.6';
    modal.classList.remove('hidden');

    setTimeout(() => {
        mainSection.style.opacity = '1';
        modal.classList.add('hidden');
    }, 1000);
})


email.addEventListener('keypress', function(){
    email.classList.remove('email2')
})

user.addEventListener('keypress', function(){
    user.classList.remove('F-name')
})