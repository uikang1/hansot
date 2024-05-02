// recipe

import { recipeExplain } from './../data.js';

let $recipeLi = getAll('.recipe .recipe_con .recipe_image li');
let $recipeSpan = getAll('.recipe .recipe_con .recipe_image li span');
let $recipePic = get('.recipe .recipe_con .recipe_explain img');
let $recipeTitle = get('.recipe .recipe_con .recipe_explain .text_area .recipe_title');
let $recipeStrong = get('.recipe .recipe_con .recipe_explain .text_area .recipe_intro strong');
let $recipeText = get('.recipe .recipe_con .recipe_explain .text_area .recipe_text');

$recipeSpan[0].classList.add('on');
$recipeLi.forEach((recipe, idx) => {
    recipe.addEventListener('click', (e) => {
        $recipeSpan.forEach((span) => {
            span.classList.remove('on');
        });
        $recipeSpan[idx].classList.add('on');
        $recipePic.setAttribute('src', `images/content/menu/recipe/sub${idx}.png`);
        $recipeTitle.textContent = recipeExplain[idx].title;
        $recipeStrong.textContent = recipeExplain[idx].title;
        $recipeText.textContent = recipeExplain[idx].text;
    });
});

//  // recipe
