// 공통

import {
    recipeExplain,
    productNew,
    productKey,
    productSide,
    productSquare,
    productBowl,
    productPre,
    storePlace,
    storePlaceIncheon,
    storePlaceSeoul,
    storeNew,
    seoulArr,
    incheonArr,
    daejeonArr,
    gwangjuArr,
    daeguArr,
    ulsanArr,
    busanArr,
    gyeonggiArr,
    gwangwonArr,
    northCungcheongArr,
    southCungcheongArr,
    northJeonraArr,
    southJeonraArr,
    northGyeongsangArr,
    southGyeongsangArr,
    jejuArr,
    faqPosts,
    newsContent,
} from '../data.js';

const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

let $links = getAll('a[href="#"]');
$links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
// brand

// //.brand

// menu

// 전체메뉴

const product = () => {
    let $productGroup = getAll('.product_con1 .product_group_list .product_group_name > li');
    console.log($productGroup);
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

// 식재료이야기

const foodstory = () => {
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
};
// 꿀조합레시피
const recipe = () => {
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
};
// //.menu

// store

const store = () => {
    let $typing = get('.store .store_area .store_search .store_typing input');
    let $storeSearchBtn = get('.store .store_area .store_search .store_click');
    let $storeSearchSido = get('.store .store_area .store_search .search #sido');
    let $storeSearchGoogun = get('.store .store_area .store_search .search #googun');
    let $storeListBtns = getAll('.store .store_area .store_list .list_group a');
    let $storeList = getAll('.store .store_area .store_list .list_group ul');
    let $storeListUl = get('.store .store_area .store_list .list_group .store_place');

    $storeSearchSido.innerHTML = `<option value='시/도 선택'>시/도 선택</option>
    <option value="인천광역시">인천광역시</option>
    <option value="서울특별시">서울특별시</option>

  `;

    $storeSearchSido.addEventListener('change', (e) => {
        $storeSearchGoogun.innerHTML = '';
        if ($storeSearchSido.value === '시/도 선택') {
            $storeSearchGoogun.innerHTML = `<option>군/구 선택</option>`;
        } else if ($storeSearchSido.value === '서울특별시') {
            seoulArr.forEach((seoul, index) => {
                $storeSearchGoogun.innerHTML += `<option>${seoul}</option>`;
            });
        } else if ($storeSearchSido.value === '인천광역시') {
            incheonArr.forEach((incheon, index) => {
                $storeSearchGoogun.innerHTML += `<option>${incheon}</option>`;
            });
        }
    });

    // 지점 검색
    $storeSearchBtn.addEventListener('click', (e) => {
        let text = $typing.value;
        let text1 = '서울';
        let text2 = '인천';
        let text3 = $storeSearchGoogun.value;
        let result = '';
        let output = '';

        if ($storeSearchSido.value.includes(text1) || text.includes(text1)) {
            $storeListUl.innerHTML = '';
            let banner = () => {
                storePlaceSeoul.forEach((seoul, idx) => {
                    let li = document.createElement('li');

                    li.innerHTML = `
                            <strong>${seoul.store}</strong>
                            <p class="store_info">전화번호<em>${seoul.phone}</em></p>
                            <p class="store_info">주소<em>${seoul.location}</em></p>
                            <p class="store_info">영업시간<em>${seoul.open}</em></p>
                            <div class="store_icon">
                            <div class="icon_area" >
                            <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                            </div>
                            <div class="icon_area" >
                            <img src="images/content/store/parking.png" alt="주차불가능">
                            <span>주차불가능</span></div></div>
            `;
                    $storeListUl.append(li);
                });
            };
            banner();

            if (text3 !== '군/구 선택') {
                result = storePlaceSeoul.filter((googun) => {
                    return googun.location.includes(text3);
                });

                result.forEach((result, idx) => {
                    output += `<li>`;
                    output += `<strong>${result.store}</strong>
                        <p class="store_info">전화번호<em>${result.phone}</em></p>
                        <p class="store_info">주소<em>${result.location}</em></p>
                        <p class="store_info">영업시간<em>${result.open}</em></p>
                        <div class="store_icon">
                        <div class="icon_area" >
                        <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                        </div>
                        <div class="icon_area" >
                        <img src="images/content/store/parking.png" alt="주차불가능">
                        <span>주차불가능</span></div></div>`;
                    output += `</li>`;
                });

                $storeListUl.innerHTML = output;
            } else {
                $storeListUl.innerHTML = '';

                storePlaceSeoul.forEach((seoul, idx) => {
                    let li = document.createElement('li');

                    li.innerHTML = `
                            <strong>${seoul.store}</strong>
                            <p class="store_info">전화번호<em>${seoul.phone}</em></p>
                            <p class="store_info">주소<em>${seoul.location}</em></p>
                            <p class="store_info">영업시간<em>${seoul.open}</em></p>
                            <div class="store_icon">
                            <div class="icon_area" >
                            <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                            </div>
                            <div class="icon_area" >
                            <img src="images/content/store/parking.png" alt="주차불가능">
                            <span>주차불가능</span></div></div>
            `;
                    $storeListUl.append(li);
                });
            }
        } else if ($storeSearchSido.value.includes(text2) || $typing.value.includes(text2)) {
            $storeListUl.innerHTML = '';

            storePlaceIncheon.forEach((incheon, idx) => {
                let li = document.createElement('li');

                li.innerHTML = `
                            <strong>${incheon.store}</strong>
                            <p class="store_info">전화번호<em>${incheon.phone}</em></p>
                            <p class="store_info">주소<em>${incheon.location}</em></p>
                            <p class="store_info">영업시간<em>${incheon.open}</em></p>
                            <div class="store_icon">
                            <div class="icon_area" >
                            <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                            </div>
                            <div class="icon_area" >
                            <img src="images/content/store/parking.png" alt="주차불가능">
                            <span>주차불가능</span></div></div>
            `;
                $storeListUl.append(li);
            });

            if (text3 !== '군/구 선택') {
                result = storePlaceIncheon.filter((googun) => {
                    return googun.location.includes(text3);
                });

                result.forEach((result, idx) => {
                    output += `<li>`;
                    output += `<strong>${result.store}</strong>
                        <p class="store_info">전화번호<em>${result.phone}</em></p>
                        <p class="store_info">주소<em>${result.location}</em></p>
                        <p class="store_info">영업시간<em>${result.open}</em></p>
                        <div class="store_icon">
                        <div class="icon_area" >
                        <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                        </div>
                        <div class="icon_area" >
                        <img src="images/content/store/parking.png" alt="주차불가능">
                        <span>주차불가능</span></div></div>`;
                    output += `</li>`;
                });

                $storeListUl.innerHTML = output;
            } else {
                $storeListUl.innerHTML = '';

                storePlaceIncheon.forEach((incheon, idx) => {
                    let li = document.createElement('li');

                    li.innerHTML = `
                            <strong>${incheon.store}</strong>
                            <p class="store_info">전화번호<em>${incheon.phone}</em></p>
                            <p class="store_info">주소<em>${incheon.location}</em></p>
                            <p class="store_info">영업시간<em>${incheon.open}</em></p>
                            <div class="store_icon">
                            <div class="icon_area" >
                            <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                            </div>
                            <div class="icon_area" >
                            <img src="images/content/store/parking.png" alt="주차불가능">
                            <span>주차불가능</span></div></div>
            `;
                    $storeListUl.append(li);
                });
            }
        } else {
            $storeListUl.innerHTML = '';
            let banner = () => {
                storePlace.forEach((place, idx) => {
                    let li = document.createElement('li');

                    li.innerHTML = `
                            <strong>${place.store}</strong>
                            <p class="store_info">전화번호<em>${place.phone}</em></p>
                            <p class="store_info">주소<em>${place.location}</em></p>
                            <p class="store_info">영업시간<em>${place.open}</em></p>
                            <div class="store_icon">
                            <div class="icon_area" >
                            <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                            </div>
                            <div class="icon_area" >
                            <img src="images/content/store/parking.png" alt="주차불가능">
                            <span>주차불가능</span></div></div>
            `;
                    $storeListUl.append(li);
                });
            };
            banner();
        }

        if (text !== '') {
            result = storePlace.filter((place) => {
                if (place.store.includes(text) || place.location.includes(text) === true) {
                    return place;
                }
            });

            result.forEach((result, idx) => {
                output += `<li>`;
                output += `<strong>${result.store}</strong>
                    <p class="store_info">전화번호<em>${result.phone}</em></p>
                    <p class="store_info">주소<em>${result.location}</em></p>
                    <p class="store_info">영업시간<em>${result.open}</em></p>
                    <div class="store_icon">
                    <div class="icon_area" >
                    <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                    </div>
                    <div class="icon_area" >
                    <img src="images/content/store/parking.png" alt="주차불가능">
                    <span>주차불가능</span></div></div>`;
                output += `</li>`;
            });
            $storeListUl.innerHTML = output;
        }
    });

    // //.지점 검색
    $storeListBtns[0].addEventListener('click', (e) => {
        $storeList[0].classList.add('on');
        $storeList[1].classList.remove('on');
    });

    $storeListBtns[1].addEventListener('click', (e) => {
        $storeList[1].classList.add('on');
        $storeList[0].classList.remove('on');
    });

    storePlaceSeoul.forEach((seoul, idx) => {
        let li = document.createElement('li');
        li.innerHTML = `
                    <strong>${seoul.store}</strong>
                    <p class="store_info">전화번호<em>${seoul.phone}</em></p>
                    <p class="store_info">주소<em>${seoul.location}</em></p>
                    <p class="store_info">영업시간<em>${seoul.open}</em></p>
                    <div class="store_icon">
                    <div class="icon_area" >
                    <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                    </div>
                    <div class="icon_area" >
                    <img src="images/content/store/parking.png" alt="주차불가능">
                    <span>주차불가능</span></div></div>
    `;
        $storeListUl.append(li);
    });

    storePlaceIncheon.forEach((incheon, idx) => {
        let li = document.createElement('li');
        li.innerHTML = `
                    <strong>${incheon.store}</strong>
                    <p class="store_info">전화번호<em>${incheon.phone}</em></p>
                    <p class="store_info">주소<em>${incheon.location}</em></p>
                    <p class="store_info">영업시간<em>${incheon.open}</em></p>
                    <div class="store_icon">
                    <div class="icon_area" >
                    <img src="images/content/store/site.png" alt="좌석있음"> <span>좌석있음</span>
                    </div>
                    <div class="icon_area" >
                    <img src="images/content/store/parking.png" alt="주차불가능">
                    <span>주차불가능</span></div></div>
    `;
        $storeListUl.append(li);
    });
};

// //.store

// event

const event = () => {
    let data = [
        {
            id: 1,
            img: 'images/content/event/img16.jpg',
            eventname: '[2월 스낵 신메뉴] 알찬 스낵<br>즐겨보세요',
            alt: '알찬스낵',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 2,
            img: 'images/content/event/img17.jpg',
            eventname: '[2월 신메뉴] 해바라기 로 튀긴<br>통다리!!',
            alt: '해바라기',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 3,
            img: 'images/content/event/img18.jpg',
            eventname: '[한솥 30주년] 한솥, ESG와 함께<br> 30년',
            alt: '30주년',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 4,
            img: 'images/content/event/img19.jpg',
            eventname: '[2월 스낵 신메뉴] 해시 포테이토<br> 스틱 시즈닝 2종(치즈버터,허니버터)',
            alt: '해시포테이토스틱',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 5,
            img: 'images/content/event/img20.jpg',
            eventname: '[한솥 디저트] 리얼 티라미수<br> 찰떡',
            alt: '리얼티라미수찰떡',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 6,
            img: 'images/content/event/img21.jpg',
            eventname: '[1월 기간한정] 한솥X키크니<br> 한정판 스티커 증정',
            alt: '한솥키크니',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 7,
            img: 'images/content/event/img22.jpg',
            eventname: '[지구에 착!한솥] 당신의 재활용,<br> 한솥의 새활용',
            alt: '재활용캠페인',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 8,
            img: 'images/content/event/img23.jpg',
            eventname: '[12월 기간한정] 한솥과<br> 함께하는 I♥기부 이벤트',
            alt: '기부',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
        {
            id: 9,
            img: 'images/content/event/img24.jpg',
            eventname: '[지구에 착!한솥] 당신의 재활용,<br> 한솥의 새활용',
            alt: '재활용캠페인',
            finish: '이벤트가 종료되었습니다.',
            fsh: '종료',
        },
    ];

    let plus = document.querySelector('.conten .div');
    let more = document.querySelector('.more span a');
    let off = document.querySelectorAll('.conten .off');
    let offtext = document.querySelectorAll('.conten .off li p');
    let offing = document.querySelectorAll('.conten .off li .progress');
    let cnt = 0;

    //더보기 클릭
    more.addEventListener('click', (e) => {
        for (let i = 0; i < 9; i++) {
            plus.innerHTML += `
                <li><a><img src="${data[cnt].img}" alt="">
                <span>${data[cnt].eventname}</span>
                <p>${data[cnt].finish}</p>
                <span class="progress">${data[cnt].fsh}</span></a>
                </a></li>
            `;
            cnt = cnt + 1;
        }
        more.style.display = 'none';
    });
    //이벤트 종료
    off.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
    //이벤트 종료 텍스트
    offtext.forEach((item, idx) => {
        item.textContent = '이벤트가 종료되었습니다';
    });

    //이벤트 종료 박스
    offing.forEach((item, idx) => {
        item.textContent = '종료';
        item.style.background = '#303030';
    });
};

// //.event

// franchise

//창업문의
const founded = () => {
    // 유효성 검사를 위한 정규식 표현
    const regular = {
        name: /^[a-zA-Z가-힣\s]+$/,
        phoneNumber: /^\d{3}-\d{3,4}-\d{4}$/,
        email: /^[a-zA-Z0-9._%+-]+$/,
        domain: /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        region: /^[a-zA-Z가-힣\s]+$/,
    };

    // 유효성 검사 함수
    let validate = (input, regex) => regex.test(input);

    // 접수하기 버튼 클릭
    let apply = document.querySelector('.apply');
    apply.addEventListener('click', () => {
        // 이름 유효성 검사
        let name = document.getElementById('user_name').value;
        let phoneNumber = document.getElementById('phone_number').value;
        let email1 = document.getElementById('user-mail1').value;
        let email2 = document.getElementById('user-mail2').value;
        let email = email1 + '@' + email2;
        let region = document.getElementById('found').value;
        let agreeChecked = document.getElementById('agree').checked;

        if (!validate(name, regular.name)) {
            alert('이름을 입력하세요.');
            document.getElementById('user_name').focus();
            return;
        }

        // 전화번호 유효성 검사
        if (!validate(phoneNumber, regular.phoneNumber)) {
            alert('전화번호를 입력하세요. (000-0000-0000)');
            document.getElementById('phone_number').focus();
            return;
        }

        // 이메일 아이디 유효성 검사
        if (!validate(email1, regular.email)) {
            alert('이메일 아이디를 입력하세요.');
            document.getElementById('user-mail1').focus();
            return;
        }

        // 이메일 도메인 유효성 검사
        if (!validate(email2, regular.domain)) {
            alert('이메일 도메인을 입력하세요.');
            document.getElementById('user-mail2').focus();
            return;
        }

        // 이메일 유효성 검사
        if (validate(email, regular.email)) {
            alert('이메일을 입력하세요.');
            return;
        }

        // 창업희망지역 유효성 검사
        if (!validate(region, regular.region)) {
            alert('창업 희망 지역을 입력하세요.');
            document.getElementById('found').focus();
            return;
        }
        if (!agreeChecked) {
            alert('개인정보 동의 체크를 해주세요');
            return;
        }
        clear();

        // 접수 완료 알림
        alert('접수되었습니다.');
    });

    let yes = document.querySelector('button.yes');
    let no = document.querySelector('button.no');
    let cancle = document.querySelector('.cancle');

    // yes 버튼 클릭
    yes.addEventListener('click', () => {
        console.log(yes);
        yes.classList.add('on');
        no.classList.remove('on');
    });

    // no 버튼 클릭
    no.addEventListener('click', () => {
        no.classList.add('on');
        yes.classList.remove('on');
    });

    // 취소하기 버튼 클릭
    cancle.addEventListener('click', () => {
        // 취소 알림 표시
        alert('취소되었습니다.');
        // 공백처리
        clear();
    });

    function clear() {
        document.getElementById('user_name').value = '';
        document.getElementById('phone_number').value = '';
        document.getElementById('user-mail1').value = '';
        document.getElementById('user-mail2').value = '';
        document.getElementById('found').value = '';
        document.getElementById('money').value = '';
        document.getElementById('agree').checked = false;
    }

    // 페이지 새로고침
    let form = document.querySelector('.form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
};

// //.franchise

// hansot

// 한솥의 약속
const promise = () => {
    let $promiseContentStrong = getAll('.promise .five_promise_right strong');
    let $promiseContentP = getAll('.promise .five_promise_right p');
    let wScroll;

    $promiseContentStrong.forEach((strong, index) => {
        strong.style.transition = '2s';
        window.addEventListener('scroll', (e) => {
            wScroll = window.scrollY;
            if (wScroll >= strong.getBoundingClientRect().y + 500) {
                strong.style.opacity = 1;
            } else {
                strong.style.opacity = 0;
            }
        });
    });

    $promiseContentP.forEach((pItem, index) => {
        pItem.style.transition = '2s';
        window.addEventListener('scroll', (e) => {
            wScroll = window.scrollY;
            if (wScroll >= pItem.getBoundingClientRect().y + 500) {
                pItem.style.opacity = 1;
            } else {
                pItem.style.opacity = 0;
            }
        });
    });
};

//한솥의 비전

const vision = () => {
    let $principleImg = get('.vision .vision_page .five_principle');
    let $principleText = get('.vision .vision_page .vision_five_principle');
    let $trust = get('.vision .vision_trust');
    let wScroll = 0;
    let $principleImgY = Math.round($principleImg.getBoundingClientRect().y);
    let $principleImgH = Math.round($principleImg.getBoundingClientRect().height);
    let $principleTextY = Math.round($principleText.getBoundingClientRect().y);
    let $principleTextH = Math.round($principleText.getBoundingClientRect().height);
    let $trustY = Math.round($trust.getBoundingClientRect().y);
    let $trustH = Math.round($trust.getBoundingClientRect().height);

    $principleImg.style.transition = `2s`;
    $principleText.style.transition = `2s`;
    $trust.style.transition = `2s`;

    window.addEventListener('scroll', (e) => {
        wScroll = window.scrollY;
        console.log(wScroll);
        console.log($principleImgY);
        if (wScroll >= $principleImgY - 500) {
            $principleImg.style.opacity = 1;
        } else {
            $principleImg.style.opacity = 0;
        }
        if (wScroll >= $principleTextY - 500) {
            $principleText.style.opacity = 1;
        } else {
            $principleText.style.opacity = 0;
        }
        if (wScroll >= $trustY - 500) {
            $trust.style.opacity = 1;
        } else {
            $trust.style.opacity = 0;
        }
    });
};
//연혁
const history = () => {
    let $historyYears = getAll('.history .history_way .way_right .way_years li');
    let $historyTexts = getAll(
        '.history .history_way .way_right .year_text_top .ul_hidden .year_text'
    );
    let $historyUl = getAll(
        '.history .history_way .way_right .year_text_top .ul_hidden .year_text'
    );
    let $historyNext = get('.history .history_way .way_right .history_btn_next');
    let $historyPrev = get('.history .history_way .way_right .history_btn_prev');

    let old = 0,
        current = 0;
    let divWidth = $historyUl[0].children[0].offsetWidth;
    let cnt = 0,
        startX = 0;

    $historyYears.forEach((year, index) => {
        year.addEventListener('click', (e) => {
            $historyUl.forEach((ul, index) => {
                ul.style.left = `0px`;
                cnt = 0;
            });
            current = index;
            $historyYears[old].classList.remove('on');
            $historyYears[current].classList.add('on');
            old = current;

            $historyTexts.forEach((text, idx) => {
                text.classList.remove('on');
            });
            $historyTexts[current].classList.add('on');
        });
    });

    $historyNext.addEventListener('click', (e) => {
        for (let i = 0; i < 4; i++) {
            if ($historyUl[i].classList.contains('on')) {
                if (cnt >= 7) return;
                cnt++;
                $historyUl[i].style.left = `${-divWidth * cnt}px`;
            }
        }
    });
};

//뉴스
const news = () => {
    let $list = get('.news .old_news');
    let $moreBtn = get('.news .news_btn button');
    let totalImage = newsContent.length;
    let cnt = 0,
        row = '';

    const showImg = () => {
        if (cnt >= totalImage) return;
        for (let i = 0; i < 3; i++) {
            row += `<li class="old_news_content">
        <a href=${newsContent[cnt].link} target="_blank"><div><em>${newsContent[cnt].date}</em><img src="${newsContent[cnt].image}" alt="${newsContent[cnt].title}"></div><div class="old_news_text"><span>${newsContent[cnt].name}</span><strong>${newsContent[cnt].title}</strong><p>${newsContent[cnt].text}</p><b><img src="${newsContent[cnt].icon}"></b></div></a></li>`;
            cnt++;
        }
        $list.innerHTML = '<p>지난 NEWS</p>' + row;
    };
    showImg();
    $moreBtn.addEventListener('click', (e) => {
        showImg();
    });
};
//자주 묻는 질문
//자주 묻는 질문
const faq = () => {
    let $faqTbody = get('.frequently_asked .faq tbody');
    let $paging = get('.frequently_asked .faq_paging');
    let row = '',
        postPerPage = 8,
        currentPage = 1;
    let firstPost, lastPost, postMod, pageNumber;
    let a = '',
        old = 0;
    let $sortLi = getAll('.faq_bar .faq_kind li');

    let sortArr1 = faqPosts.filter((element) => element.sort === $sortLi[1].textContent);
    let sortArr2 = faqPosts.filter((element) => element.sort === $sortLi[2].textContent);
    let sortArr3 = faqPosts.filter((element) => element.sort === $sortLi[3].textContent);
    let sortArr4 = faqPosts.filter((element) => element.sort === $sortLi[4].textContent);
    let sortArr5 = faqPosts.filter((element) => element.sort === $sortLi[5].textContent);

    let pageList = (num, array) => {
        row = '';
        lastPost = num * postPerPage;
        firstPost = lastPost - postPerPage;

        if (postMod !== 0 && num === pageNumber) {
            lastPost = firstPost + postMod;
        }
        for (let i = firstPost; i < lastPost; i++) {
            row += `<tr>
          <td>${array[i].id}</td>
          <td>${array[i].sort}</td>
          <td>${array[i].title}</td>
          <td><img src="${array[i].icon}"></td>
          </tr>`;
        }
        $faqTbody.innerHTML = row;
    };

    let getData = (arr) => {
        let totalPost = arr.length;
        postMod = totalPost % postPerPage;
        pageNumber = Math.ceil(totalPost / postPerPage);
        pageList(currentPage, arr);

        for (let i = 1; i <= pageNumber; i++) {
            a += `<a href="#">${i}</a>`;
        }
        $paging.innerHTML = a;

        let aAll = getAll('.faq_paging a');
        aAll[currentPage - 1].classList.add('on');

        aAll.forEach((a, index) => {
            a.addEventListener('click', (e) => {
                currentPage = index + 1;
                if (old !== index) {
                    aAll[index].classList.add('on');
                    aAll[old].classList.remove('on');
                    pageList(currentPage, arr);
                    old = index;
                }
            });
        });
    };

    $sortLi.forEach((li, index) => {
        li.addEventListener('click', (e) => {
            $sortLi.forEach((liItem, index) => {
                liItem.classList.remove('on');
            });
            $sortLi[index].classList.add('on');
            row = '';
            a = '';
            currentPage = 1;
            if (li.textContent === sortArr1[0].sort) {
                getData(sortArr1);
            } else if (li.textContent === sortArr2[0].sort) {
                getData(sortArr2);
            } else if (li.textContent === sortArr3[0].sort) {
                getData(sortArr3);
            } else if (li.textContent === sortArr4[0].sort) {
                getData(sortArr4);
            } else if (li.textContent === sortArr5[0].sort) {
                getData(sortArr5);
            } else if (li.textContent === '전체') {
                getData(faqPosts);
            }
        });
    });
    getData(faqPosts);
};

//고객의 소리 메인

const voc = () => {
    let $selectCity = get('.voc .voc_form .voc_second #city');
    let $selectBorough = get('.voc .voc_form .voc_second #borough');
    let $faqButton = get('.voc .faq_button button');
    let $faqInput = getAll('.voc input');

    $selectCity.innerHTML = `<option value='시/도 선택'>시/도 선택</option>
    <option value="인천광역시">인천광역시</option>
    <option value="서울특별시">서울특별시</option>
    <option value="대전광역시">대전광역시</option>
    <option value="광주광역시">광주광역시</option>
    <option value="대구광역시">대구광역시</option>
    <option value="울산광역시">울산광역시</option>
    <option value="부산광역시">부산광역시</option>
    <option value="경기도">경기도</option>
    <option value="강원도">강원도</option>
    <option value="충청북도">충청북도</option>
    <option value="충청남도">충청남도</option>
    <option value="전라북도">전라북도</option>
    <option value="전라남도">전라남도</option>
    <option value="경상북도">경상북도</option>
    <option value="경상남도">경상남도</option>
    <option value="제주도">제주도</option>
  `;

    $selectCity.addEventListener('change', (e) => {
        $selectBorough.innerHTML = '';
        if ($selectCity.value === '시/도 선택') {
            $selectBorough.innerHTML = `<option>군/구 선택</option>`;
        } else if ($selectCity.value === '서울특별시') {
            seoulArr.forEach((seoul, index) => {
                $selectBorough.innerHTML += `<option>${seoul}</option>`;
            });
        } else if ($selectCity.value === '인천광역시') {
            incheonArr.forEach((incheon, index) => {
                $selectBorough.innerHTML += `<option>${incheon}</option>`;
            });
        } else if ($selectCity.value === '대전광역시') {
            daejeonArr.forEach((daejeon, index) => {
                $selectBorough.innerHTML += `<option>${daejeon}</option>`;
            });
        } else if ($selectCity.value === '광주광역시') {
            gwangjuArr.forEach((gwangju, index) => {
                $selectBorough.innerHTML += `<option>${gwangju}</option>`;
            });
        } else if ($selectCity.value === '대구광역시') {
            daeguArr.forEach((daegu, index) => {
                $selectBorough.innerHTML += `<option>${daegu}</option>`;
            });
        } else if ($selectCity.value === '울산광역시') {
            ulsanArr.forEach((ulsan, index) => {
                $selectBorough.innerHTML += `<option>${ulsan}</option>`;
            });
        } else if ($selectCity.value === '부산광역시') {
            busanArr.forEach((busan, index) => {
                $selectBorough.innerHTML += `<option>${busan}</option>`;
            });
        } else if ($selectCity.value === '경기도') {
            gyeonggiArr.forEach((gyeonggi, index) => {
                $selectBorough.innerHTML += `<option>${gyeonggi}</option>`;
            });
        } else if ($selectCity.value === '강원도') {
            gwangwonArr.forEach((gwangwon, index) => {
                $selectBorough.innerHTML += `<option>${gwangwon}</option>`;
            });
        } else if ($selectCity.value === '충청북도') {
            northCungcheongArr.forEach((northCungcheong, index) => {
                $selectBorough.innerHTML += `<option>${northCungcheong}</option>`;
            });
        } else if ($selectCity.value === '충청남도') {
            southCungcheongArr.forEach((southCungcheong, index) => {
                $selectBorough.innerHTML += `<option>${southCungcheong}</option>`;
            });
        } else if ($selectCity.value === '전라북도') {
            northJeonraArr.forEach((northJeonra, index) => {
                $selectBorough.innerHTML += `<option>${northJeonra}</option>`;
            });
        } else if ($selectCity.value === '전라남도') {
            southJeonraArr.forEach((southJeonra, index) => {
                $selectBorough.innerHTML += `<option>${southJeonra}</option>`;
            });
        } else if ($selectCity.value === '경상북도') {
            northGyeongsangArr.forEach((northGyeongsang, index) => {
                $selectBorough.innerHTML += `<option>${northGyeongsang}</option>`;
            });
        } else if ($selectCity.value === '경상남도') {
            southGyeongsangArr.forEach((southGyeongsang, index) => {
                $selectBorough.innerHTML += `<option>${southGyeongsang}</option>`;
            });
        } else if ($selectCity.value === '제주도') {
            jejuArr.forEach((jeju, index) => {
                $selectBorough.innerHTML += `<option>${jeju}</option>`;
            });
        }
    });
};

//고객의 소리 서브

const vocSub = () => {
    const handleSubmit = () => {
        // 동의 확인
        let agree = document.getElementById('chk1');
        if (!agree.checked) {
            alert('개인정보 동의가 필요합니다.');
            return;
        }

        let radios = document.querySelectorAll('input[name="division"]');
        let title = document.getElementById('inquiry_title');
        let content = document.getElementById('inquiry_content');
        let store = document.getElementById('store_name');
        let borough = document.getElementById('borough').value;
        let city = document.getElementById('city').value;
        //라디오 선택
        let selected = false;

        radios.forEach((radio) => {
            if (radio.checked) {
                selected = true;
            }
        });

        //문의구분 선택하기
        if (!selected) {
            alert('문의 구분을 선택하세요.');
            return;
        }

        // 점포명 입력안하면

        if (!store.value.trim()) {
            alert('점포명을 입력하세요.');
            store.focus();
            return;
        }

        // 제목 과 내용 입력 안하면
        if (!title.value.trim() || !content.value.trim()) {
            title.focus();
            content.focus();
            alert('제목과 내용을 입력하세요.');
            return;
        }
        // 시/도 선택 확인
        if (city === '시/도 선택') {
            alert('시/도를 선택하세요.');
            return;
        }

        // 군/구 선택 확인
        if (borough === '군/구 선택') {
            alert('군/구를 선택하세요.');
            return;
        }

        alert('제출완료');
    };
    // 문의 버튼
    let submitButton = document.querySelector('.faq_button button');
    submitButton.addEventListener('click', handleSubmit);
};
// //.hansot

// 실행
const subInit = () => {
    if (location.pathname.split('/').pop() === 'foodstory.html') {
        foodstory();
    } else if (location.pathname.split('/').pop() === 'product.html') {
        product();
    } else if (location.pathname.split('/').pop() === 'recipe.html') {
        recipe();
    } else if (location.pathname.split('/').pop() === 'store.html') {
        store();
    } else if (location.pathname.split('/').pop() === 'event.html') {
        event();
    } else if (location.pathname.split('/').pop() === 'founded.html') {
        founded();
    } else if (location.pathname.split('/').pop() === 'voc.html') {
        voc();
        vocSub();
    } else if (location.pathname.split('/').pop() === 'vision.html') {
        vision();
    } else if (location.pathname.split('/').pop() === 'promise.html') {
        promise();
    } else if (location.pathname.split('/').pop() === 'history.html') {
        history();
    } else if (location.pathname.split('/').pop() === 'frequentlyasked.html') {
        faq();
    } else if (location.pathname.split('/').pop() === 'news.html') {
        news();
    }
};
(() => {
    subInit();
})();
