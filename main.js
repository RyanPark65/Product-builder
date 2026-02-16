const button = document.getElementById('suggestion-button');
const menuNameEl = document.getElementById('menu-name');
const menuCountEl = document.getElementById('menu-count');
const menuSearchLinkEl = document.getElementById('menu-search-link');

const menus = Array.isArray(window.MENU_DATABASE) ? window.MENU_DATABASE : [];
let lastIndex = -1;

function getRandomIndex(length) {
    if (length <= 1) {
        return 0;
    }

    let index;
    do {
        index = Math.floor(Math.random() * length);
    } while (index === lastIndex);

    return index;
}

function showRandomMenu() {
    if (menus.length === 0) {
        menuNameEl.textContent = '메뉴 데이터를 불러오지 못했습니다.';
        menuSearchLinkEl.removeAttribute('href');
        menuSearchLinkEl.textContent = '데이터 확인 필요';
        return;
    }

    const index = getRandomIndex(menus.length);
    const menu = menus[index];
    lastIndex = index;

    menuNameEl.textContent = menu;
    menuSearchLinkEl.href = `https://www.google.com/search?q=${encodeURIComponent(menu + ' recipe')}`;
    menuSearchLinkEl.textContent = `"${menu}" 검색 결과 열기`;
}

menuCountEl.textContent = `총 ${menus.length}개 메뉴 데이터 사용 중`;
button.addEventListener('click', showRandomMenu);
showRandomMenu();
