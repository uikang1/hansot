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

//헤더, 푸터
const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                get(tag).innerHTML = res;
                navi();
            });
    };
    getPage('page/header.html', '#header');
    getPage('page/footer.html', '#footer');
};
(() => {
    comInit();
    navi();
})();
