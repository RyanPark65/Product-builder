const suggestionButton = document.getElementById('suggestion-button');
const suggestionCard = document.getElementById('suggestion-card');
const menus = Array.isArray(window.MENU_DATABASE) ? window.MENU_DATABASE : [];
let lastIndex = -1;

function getRandomIndex(length) {
    if (length <= 1) return 0;
    let index;
    do {
        index = Math.floor(Math.random() * length);
    } while (index === lastIndex);
    return index;
}

function showRandomMenu() {
    if (menus.length === 0) {
        suggestionCard.innerHTML = '<div class="placeholder"><p>메뉴 데이터를 불러오지 못했습니다.</p></div>';
        return;
    }

    suggestionButton.classList.add('loading');
    suggestionButton.disabled = true;

    // Simulate network latency for a better UX
    setTimeout(() => {
        const index = getRandomIndex(menus.length);
        const menu = menus[index];
        lastIndex = index;
        
        // Using picsum.photos for random images based on the menu name to have some consistency
        const imageUrl = `https://picsum.photos/500/250?random=${encodeURIComponent(menu)}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(menu + ' 레시피')}`;

        suggestionCard.innerHTML = `
            <div class="card-content">
                <img src="${imageUrl}" alt="${menu}">
                <h2>${menu}</h2>
                <a href="${googleSearchUrl}" target="_blank" rel="noopener noreferrer">레시피 찾아보기</a>
            </div>
        `;
        
        suggestionButton.classList.remove('loading');
        suggestionButton.disabled = false;
    }, 500);
}

suggestionButton.addEventListener('click', showRandomMenu);
