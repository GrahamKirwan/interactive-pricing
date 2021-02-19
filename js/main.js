// DOM SELECTORS //
const range = document.querySelector('#myRange');
const pageviews = document.querySelector('.section_component_top--views');
const priceHead = document.querySelector('.section_component_top--price');
const monthly = document.querySelector('.section_component_top--monthly');
const checkbox = document.querySelector('.billing-checkbox');

let discount = false;
let monthlyVal = '<span>/ month</span>';

checkbox.addEventListener('click', function(){
    discount = checkbox.checked;
    if (discount) {
        monthly.innerHTML = '/ year';
        monthlyVal = '<span>/ year</span>';
    } 
    else if (!discount) {
        monthly.textContent = '/ month';
        monthlyVal = '<span>/ month</span>';
    }
    progBarColour(range, discount);

    return monthlyVal;
});

range.addEventListener('input', function(){
    progBarColour(range, discount);
});

let curRange = range.value;





function progBarColour (range, discount) {
    let perc;
    let views;
    let price;

    if (range.value == 1){
        perc = '0%';
        views = '1k pageviews';
        if(discount){
            price = '$72.00'
        } else {
            price = '$8.00'
        }
    }
    else if (range.value == 2){
        perc = '25%';
        views = '10k pageviews';
        if(discount){
            price = '$108.00'
        } else {
            price = '$12.00'
        }
    }
    else if (range.value == 3){
        perc = '50%';
        views = '100k pageviews';
        if(discount){
            price = '$144.00'
        } else {
            price = '$16.00'
        }
    }
    else if (range.value == 4){
        perc = '75%';
        views = '500k pageviews';
        if(discount){
            price = '$180.00'
        } else {
            price = '$20.00'
        }
    }
    else if (range.value == 5){
        perc = '100%';
        views = '1m pageviews';
        if(discount){
            price = '$216.00'
        } else {
            price = '$24.00'
        }
    }
    range.style.background = `linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) ${perc}, rgb(234, 238, 251) 0%, rgb(234, 238, 251) 100%)`;
    pageviews.textContent = views;
    priceHead.innerHTML = `${price} ${monthlyVal}`;
}