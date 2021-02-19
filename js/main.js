// DOM SELECTORS //
const range = document.querySelector('#myRange');
const pageviews = document.querySelector('.section_component_top--views');
const priceHead = document.querySelector('.section_component_top--price');



range.addEventListener('click', function(){
    progBarColour(range);
});



function progBarColour (range) {
    let perc;
    let views;
    let price;

    if (range.value == 1){
        perc = '0%';
        views = '1k pageviews';
        price = '$8.00'
    }
    else if (range.value == 2){
        perc = '25%';
        views = '10k pageviews';
        price = '$12.00';
    }
    else if (range.value == 3){
        perc = '50%';
        views = '100k pageviews';
        price = '$16.00';
    }
    else if (range.value == 4){
        perc = '75%';
        views = '500k pageviews';
        price = '$20.00';
    }
    else if (range.value == 5){
        perc = '100%';
        views = '1m pageviews';
        price = '$24.00';
    }
    range.style.background = `linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) ${perc}, rgb(234, 238, 251) 0%, rgb(234, 238, 251) 100%)`;
    pageviews.textContent = views;
    priceHead.innerHTML = `${price} <span>/ month</span>`;
}