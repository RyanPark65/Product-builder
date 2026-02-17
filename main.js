document.addEventListener('DOMContentLoaded', () => {
    const suggestionButton = document.getElementById('suggestion-button');
    const suggestionCard = document.getElementById('suggestion-card');
    const menus = Array.isArray(window.MENU_DATABASE) ? window.MENU_DATABASE : [];
    let lastIndex = -1;

    const shareFacebookBtn = document.getElementById('share-facebook');
    const shareTwitterBtn = document.getElementById('share-twitter');

    function init() {
        if (menus.length === 0) {
            suggestionCard.innerHTML = '<div class="placeholder"><p>메뉴 데이터베이스를 불러오는데 실패했습니다. 페이지를 새로고침 해주세요.</p></div>';
            suggestionButton.disabled = true;
            return;
        }
        suggestionButton.addEventListener('click', showRandomMenu);
        
        // Add Share Button Listeners
        shareFacebookBtn.addEventListener('click', shareOnFacebook);
        shareTwitterBtn.addEventListener('click', shareOnTwitter);
    }

    function getRandomIndex(length) {
        if (length <= 1) return 0;
        let index;
        do {
            index = Math.floor(Math.random() * length);
        } while (index === lastIndex);
        return index;
    }

    function showRandomMenu() {
        suggestionButton.classList.add('loading');
        suggestionButton.disabled = true;
        suggestionCard.innerHTML = '<div class="placeholder"><p>오늘의 메뉴를 고르고 있습니다...</p></div>';

        // Simulate network latency for a better UX
        setTimeout(() => {
            const index = getRandomIndex(menus.length);
            const menu = menus[index];
            lastIndex = index;

            const imageUrl = `https://picsum.photos/500/250?random=${encodeURIComponent(menu.name_en)}`;
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(menu.name_ko + ' 레시피')}`;

            let tipHtml = '';
            if (menu.tip) {
                tipHtml = `
                    <div class="cooking-tip">
                        <h3>요리 팁!</h3>
                        <p>${menu.tip}</p>
                    </div>
                `;
            }

            suggestionCard.innerHTML = `
                <div class="card-content">
                    <img src="${imageUrl}" alt="${menu.name_ko}">
                    <h2>${menu.name_ko}</h2>
                    <a href="${googleSearchUrl}" target="_blank" rel="noopener noreferrer">레시피 찾아보기</a>
                    ${tipHtml}
                </div>
            `;
            
            suggestionButton.classList.remove('loading');
            suggestionButton.disabled = false;
        }, 500);
    }

    function shareOnFacebook(e) {
        e.preventDefault();
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'Share on Facebook', 'width=600,height=400');
    }

    function shareOnTwitter(e) {
        e.preventDefault();
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent('오늘 저녁 뭐 먹지? AI가 추천해주는 랜덤 저녁 메뉴!');
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, 'Share on Twitter', 'width=600,height=400');
    }

    init();
});
