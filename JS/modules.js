import $, {} from './selector.js';


let button = $('.toggler-button');
let colapse = $('.colapse');
let displayed = false;
button.addEventListener('click', ()=>{
    if (displayed == false) {
        colapse.style.display = 'block';
        displayed = true;
    }
    else if (displayed == true) {
        colapse.style.display = 'none';
        displayed = false;
    }
});

