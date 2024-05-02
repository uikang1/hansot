// foodstory

let $kimch = get('.foodstory .kimch_text');
let $rice = get('.foodstory .rice_text');
let $meat = get('.foodstory .meat_text');
let $fish = get('.foodstory .fish_text');

let foodstoryY = 0;

window.addEventListener('scroll', (e) => {
    foodstoryY = window.scrollY;
    console.log(foodstoryY);
    if (foodstoryY >= 450) {
        $kimch.classList.add('on');
    }
    if (foodstoryY >= 1050) {
        $rice.classList.add('on');
    }
    if (foodstoryY >= 1850) {
        $meat.classList.add('on');
    }
    if (foodstoryY >= 2300) {
        $fish.classList.add('on');
    }
});
