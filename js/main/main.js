//  전체공통
const get = (target) => {
    return document.querySelector(target);
};
const getAll = (target) => {
    return document.querySelectorAll(target);
};

let $links = getAll('a[href="#"]');
$links.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

//헤더 gnb 메뉴펼치기
const navi = () => {
    let $mainLi = getAll('#header #gnb-list .main_gnb > li ');
    let $subUl = getAll('#header #gnb-list .main_gnb li .sub_gnb');
    let $header = get('#header');

    $mainLi.forEach((li, idx) => {
        li.addEventListener('mouseenter', (e) => {
            $subUl.forEach((item) => {
                item.classList.remove('on');
            });
            e.currentTarget.children[1].classList.add('on');
        });
    });

    $header.addEventListener('mouseleave', (e) => {
        $subUl.forEach((item) => {
            item.classList.remove('on');
        });
    });
};

//헤더, 푸터, 서브비주얼
const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                get(tag).innerHTML = res;
                navi();
            });
    };
    getPage('page/footer.html', '#footer');
    //이미지 있는 서브비주얼
    // getPage('page/sub_common.html', '#sub-visual');
    //이미지 없는 서브비주얼
    // getPage('page/sub_common_no_image.html', '#sub-nan-visual');
    // //
    // getPage('page/recipe_sub.html', '#recipe-sub-visual');
    // getPage('page/foodstory_sub.html', '#foodstory-sub-visual');
    // getPage('page/product_sub.html', '#product-sub-visual');
};
(() => {
    comInit();
    navi();
})();

//visual 로고이미지움직이기
let logo1 = document.querySelector('#visual img');
let logo2 = document.querySelector('#visual .visual3 .logo_bg img');
let ty = 500;

window.addEventListener('scroll', (e) => {
    ty = window.scrollY;

    logo1.style.transform = `translateX(${-ty / 3}px)`;
    logo2.style.transform = `translateX(${ty / 3}px)`;
});

//con3 꿀조합레시피 이미지슬라이드
(() => {
    const get = (target) => document.querySelector(target);
    const getAll = (target) => document.querySelectorAll(target);

    const $pagingli = getAll('.main .paging li');
    const $bannerli = getAll('.main .con3 .banner li');
    const $next = get('.main .con3 .btn-wrap .next');
    const $prev = get('.main .con3 .btn-wrap .prev');

    let current = 0,
        old = 0,
        size = 100,
        totalImage = $bannerli.length,
        timer = null,
        interval = 5000;

    $pagingli.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            current = idx;
            banner('next');
        });
    });

    $next.addEventListener('click', (e) => {
        current = current >= totalImage - 1 ? 0 : current + 1;
        banner('next');
    });
    $prev.addEventListener('click', (e) => {
        current = current <= 0 ? totalImage - 1 : current - 1;
        banner('prev');
    });
    function banner(txt) {
        let num = txt === 'next' ? size : -size;
        $bannerli[current].style.transition = '0s';
        $bannerli[current].style.left = `${num}%`;

        setTimeout(() => {
            $bannerli[current].style.transition = '0.4s';
            $bannerli[current].style.zIndex = '10';
            $bannerli[current].style.left = '0px';

            $pagingli[current].classList.add('on');
            $bannerli[old].style.zIndex = '1';
            $bannerli[old].style.left = `${num * -1}%`;
            $pagingli[old].classList.remove('on');

            old = current;
        }, 20);
    }
})();

//하단 topBar
let topBar = document.querySelector('.top');
let targetY = 0;

window.addEventListener('scroll', (e) => {
    targetY = window.scrollY;
    //하단 topBar
    if (targetY > 1000) {
        topBar.classList.add('on');
    } else {
        topBar.classList.remove('on');
    }
});

topBar.addEventListener('click', (e) => {
    ty = 0;
    window.scrollTo({ top: ty, behavior: 'smooth' });
});

//사이드 링크아이콘
let side = document.querySelectorAll('.side .icon li');
let txt = document.querySelectorAll('.side .txt li');

side[0].addEventListener('mouseenter', (e) => {
    txt[0].classList.add('on');
    txt[1].classList.remove('on');
    setTimeout(() => {
        txt[0].style.transition = '0.8s';
        txt[1].style.transition = '0.8s';
    }, 100);
});
side[1].addEventListener('mouseenter', (e) => {
    txt[0].classList.remove('on');
    txt[1].classList.add('on');
});
side[0].addEventListener('mouseleave', (e) => {
    txt[0].classList.remove('on');
    txt[1].classList.remove('on');
});
side[1].addEventListener('mouseleave', (e) => {
    txt[0].classList.remove('on');
    txt[1].classList.remove('on');
});
