// product

import {
    productNew,
    productKey,
    productSide,
    productSquare,
    productBowl,
    productPre,
} from '../data.js';

const product = () => {
    let $productGroup = getAll('.product_con1 .product_group_list .product_group_name li');
    let $productKeyword = get('.product .product_con2 .product_text_area .product_group');
    let $productName = get('.product .product_con2 .product_text_area .product_name');
    let $productText = get('.product .product_con2 .product_text_area .product_ex');
    let $productPic = get('.product .product_con2 .product_img_area img');

    let $productSlide = get('.product_con1 .product_slide .slide_cover .product_slide_item');
    let $productSlideItem = getAll(
        '.product_con1 .product_slide .slide_cover .product_slide_item li'
    );
    let $productNext = get('.product_con1 .product_slide .product_next');
    let $productPrev = get('.product_con1 .product_slide .product_prev');

    $productGroup.forEach((group, idx) => {
        group.addEventListener('click', (e) => {
            $productGroup.forEach((groupli) => {
                groupli.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        });
    });
    $productSlideItem.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $productKeyword.textContent = `${productNew[idx].group}`;
            $productName.textContent = `${productNew[idx].name}`;
            $productText.textContent = `${productNew[idx].text}`;
            $productPic.setAttribute('src', `${productNew[idx].imgurl}`);
        });
    });

    $productGroup[0].addEventListener('click', (e) => {
        $productSlideItem.forEach((slide, idx) => {
            slide.innerHTML = '';
            slide.innerHTML += `
        <span class="product_new on">new</span>
        <img src=${productNew[idx].imgurl} alt="신메뉴${productNew[idx].id}"/>
        <p class="product_slide_name">${productNew[idx].name}</p>
        `;
        });
        $productSlideItem.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $productKeyword.textContent = `${productNew[idx].group}`;
                $productName.textContent = `${productNew[idx].name}`;
                $productText.textContent = `${productNew[idx].text}`;
                $productPic.setAttribute('src', `${productNew[idx].imgurl}`);
            });
        });
    });

    $productGroup[1].addEventListener('click', (e) => {
        $productSlideItem.forEach((slide, idx) => {
            slide.innerHTML = '';
            slide.innerHTML += `
        <img src=${productPre[idx].imgurl} alt="신메뉴${productPre[idx].id}"/>
        <p class="product_slide_name">${productPre[idx].name}</p>
        `;
        });
        $productSlideItem.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $productKeyword.textContent = `${productPre[idx].group}`;
                $productName.textContent = `${productPre[idx].name}`;
                $productText.textContent = `${productPre[idx].text}`;
                $productPic.setAttribute('src', `${productPre[idx].imgurl}`);
            });
        });
    });

    $productGroup[2].addEventListener('click', (e) => {
        $productSlideItem.forEach((slide, idx) => {
            slide.innerHTML = '';
            slide.innerHTML += `
        <img src=${productSquare[idx].imgurl} alt="신메뉴${productSquare[idx].id}"/>
        <p class="product_slide_name">${productSquare[idx].name}</p>
        `;
        });
        $productSlideItem.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $productKeyword.textContent = `${productSquare[idx].group}`;
                $productName.textContent = `${productSquare[idx].name}`;
                $productText.textContent = `${productSquare[idx].text}`;
                $productPic.setAttribute('src', `${productSquare[idx].imgurl}`);
            });
        });
    });

    $productGroup[3].addEventListener('click', (e) => {
        $productSlideItem.forEach((slide, idx) => {
            slide.innerHTML = '';
            slide.innerHTML += `
        <img src=${productBowl[idx].imgurl} alt="신메뉴${productBowl[idx].id}"/>
        <p class="product_slide_name">${productBowl[idx].name}</p>
        `;
        });
        $productSlideItem.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $productKeyword.textContent = `${productBowl[idx].group}`;
                $productName.textContent = `${productBowl[idx].name}`;
                $productText.textContent = `${productBowl[idx].text}`;
                $productPic.setAttribute('src', `${productBowl[idx].imgurl}`);
            });
        });
    });

    $productGroup[4].addEventListener('click', (e) => {
        $productSlideItem.forEach((slide, idx) => {
            slide.innerHTML = '';
            slide.innerHTML += `
        <img src=${productSide[idx].imgurl} alt="신메뉴${productSide[idx].id}"/>
        <p class="product_slide_name">${productSide[idx].name}</p>
        `;
        });
        $productSlideItem.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $productKeyword.textContent = `${productSide[idx].group}`;
                $productName.textContent = `${productSide[idx].name}`;
                $productText.textContent = `${productSide[idx].text}`;
                $productPic.setAttribute('src', `${productSide[idx].imgurl}`);
            });
        });
    });

    $productGroup[5].addEventListener('click', (e) => {
        $productSlideItem.forEach((slide, idx) => {
            slide.innerHTML = '';
            slide.innerHTML += `
        <img src=${productKey[idx].imgurl} alt="신메뉴${productKey[idx].id}"/>
        <p class="product_slide_name">${productKey[idx].name}</p>
        `;
        });
        $productSlideItem.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $productKeyword.textContent = `${productKey[idx].group}`;
                $productName.textContent = `${productKey[idx].name}`;
                $productText.textContent = `${productKey[idx].text}`;
                $productPic.setAttribute('src', `${productKey[idx].imgurl}`);
            });
        });
    });

    let productFirst,
        productLast,
        productCurr = 0,
        productOld = 0,
        productSize = $productSlideItem.length;

    productLast = document.querySelector('.product_slide_item li:last-child');
    $productSlide.prepend(productLast);
    $productSlide.style.marginLeft = '-350px';

    $productPrev.addEventListener('click', (e) => {
        productCurr++;
        if (productCurr > productSize - 1) {
            productCurr = 0;
        }
        $productSlide.style.transition = 'all 0.5s ease';
        $productSlide.prepend(productLast);
        $productSlide.style.marginLeft =
            parseInt(getComputedStyle($productSlide).marginLeft) + 350 + 'px';

        setTimeout(() => {
            productLast = document.querySelector('.product_slide_item li:last-child');
            $productSlide.prepend(productLast);
            $productSlide.style.transition = 'none';
            $productSlide.style.marginLeft = '-350px';
        }, 500);
    });
    $productNext.addEventListener('click', (e) => {
        productCurr--;
        if (productCurr < 0) {
            productCurr = productSize - 1;
        }
        $productSlide.style.transition = 'all 0.5s ease';
        $productSlide.style.marginLeft =
            parseInt(getComputedStyle($productSlide).marginLeft) - 350 + 'px';

        setTimeout(() => {
            productFirst = document.querySelector('.product_slide_item li:first-child');
            $productSlide.append(productFirst);
            $productSlide.style.transition = 'none';
            $productSlide.style.marginLeft = '-350px';
        }, 500);
    });

    // 계산기
    let $productCostAdd = getAll(
        '.product .product_con2 .product_charge_area .product_charge_add .charge_item em'
    );
    let $productCostImg = getAll(
        '.product .product_con2 .product_charge_area .product_charge_add .charge_item #check'
    );

    let $productNor = get(
        '.product .product_con2 .product_charge_area .product_charge_sum .normal_charge'
    );
    let $productExtra = get(
        '.product .product_con2 .product_charge_area .product_charge_sum .extra_charge'
    );
    let $productSum = get(
        '.product .product_con2 .product_charge_area .product_charge_sum .total_charge'
    );
    let chargeSum = 0;
    $productSum.textContent = `${$productNor.textContent}원`;
    $productExtra.textContent = $productCostAdd[0].textContent;
    let total = '';
    $productCostImg.forEach((cost, idx) => {
        cost.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('on');
            $productCostAdd[idx].classList.toggle('on');

            if ($productCostAdd[idx].classList.contains('on') === true) {
                chargeSum += Number(parseInt($productCostAdd[idx].innerHTML));
                console.log(typeof chargeSum);

                $productExtra.textContent = `+${chargeSum}원`;
            } else if ($productCostAdd[idx].classList.contains('on') === false) {
                chargeSum = chargeSum - Number(parseInt($productCostAdd[idx].innerHTML));
                $productExtra.textContent = `+${chargeSum}원`;
            }

            let normal = Number(parseInt($productNor.textContent.replace(',', '')));
            $productSum.textContent = `${normal + chargeSum}원`;
        });
    });
};

(() => {
    product();
})();
//  // product
