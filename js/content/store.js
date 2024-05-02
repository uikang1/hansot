//store

import {
    storePlace,
    storePlaceIncheon,
    storePlaceSeoul,
    storeNew,
    seoulArr,
    incheonArr,
} from '../data.js';

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

(() => {
    store();
})();
