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

async function getRestaurantList(menuName) {
    const query = `${menuName} 맛집`;
    try {
        const searchResults = await gemini.googleWebSearch(query);
        const restaurants = searchResults.results.slice(0, 5).map(result => result.title.split(' - ')[0]);
        return restaurants;
    } catch (error) {
        console.error('Error fetching restaurant data:', error);
        return [];
    }
}

async function showRandomMenu() {
    if (menus.length === 0) {
        suggestionCard.innerHTML = '<div class="placeholder"><p>메뉴 데이터를 불러오지 못했습니다.</p></div>';
        return;
    }

    suggestionButton.classList.add('loading');
    suggestionButton.disabled = true;

    suggestionCard.innerHTML = '<div class="placeholder"><p>메뉴를 찾고 있습니다...</p></div>';

    const index = getRandomIndex(menus.length);
    const menu = menus[index];
    lastIndex = index;

    const [restaurants] = await Promise.all([
        getRestaurantList(menu.name_ko)
    ]);

    const imageUrl = `https://picsum.photos/500/250?random=${encodeURIComponent(menu.name_en)}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(menu.name_ko + ' 레시피')}`;

    let restaurantHtml = '';
    if (restaurants && restaurants.length > 0) {
        restaurantHtml = `
            <div class="restaurant-list">
                <h3>'${menu.name_ko}' 맛집 리스트 (참고용)</h3>
                <ul>
                    ${restaurants.map(name => `<li>${name}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    suggestionCard.innerHTML = `
        <div class="card-content">
            <img src="${imageUrl}" alt="${menu.name_ko}">
            <h2>${menu.name_ko}</h2>
            <a href="${googleSearchUrl}" target="_blank" rel="noopener noreferrer">레시피 찾아보기</a>
            ${restaurantHtml}
        </div>
    `;
    
    suggestionButton.classList.remove('loading');
    suggestionButton.disabled = false;
}

suggestionButton.addEventListener('click', showRandomMenu);
