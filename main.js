class DinnerSuggestion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const recipe = this.getAttribute('recipe');
        const imageUrl = this.getAttribute('imageUrl');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--card-background, #fff);
                    border-radius: 15px;
                    box-shadow: 0 10px 20px var(--shadow-color, rgba(0,0,0,0.1));
                    overflow: hidden;
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                :host(:hover) {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px var(--shadow-color, rgba(0,0,0,0.15));
                }
                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .card-content {
                    padding: 25px;
                }
                h3 {
                    margin-top: 0;
                    font-size: 1.5em;
                    color: var(--primary-color, #ff6f61);
                }
                p {
                    font-size: 1em;
                    color: #555;
                }
            </style>
            <img src="${imageUrl}" alt="${title}" class="card-image">
            <div class="card-content">
                <h3>${title}</h3>
                <p>${recipe}</p>
            </div>
        `;
    }
}

customElements.define('dinner-suggestion', DinnerSuggestion);

const suggestions = [
    {
        title: '김치찌개',
        recipe: '1. 돼지고기와 김치를 볶습니다. 2. 물을 붓고 두부, 파를 넣어 끓입니다. 3. 고춧가루와 마늘로 간을 맞춥니다.',
        imageUrl: 'https://images.unsplash.com/photo-1576223555885-b03363341394?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '된장찌개',
        recipe: '1. 멸치 육수를 냅니다. 2. 된장을 풀고 애호박, 두부를 넣어 끓입니다. 3. 마지막에 파와 고추를 넣습니다.',
        imageUrl: 'https://images.unsplash.com/photo-1599395521396-b0a63a563b82?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '닭볶음탕',
        recipe: '1. 닭을 한번 데친 후 양념장과 함께 끓입니다. 2. 감자, 당근을 넣고 익을 때까지 조립니다. 3. 마지막에 양파와 파를 넣습니다.',
        imageUrl: 'https://images.unsplash.com/photo-1547923507-7a57a4a45a82?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '고등어 구이',
        recipe: '1. 고등어를 손질하고 소금을 뿌려 밑간을 합니다. 2. 팬에 기름을 두르고 노릇하게 굽습니다. 3. 레몬즙을 곁들여 먹습니다.',
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
     {
        title: '비빔밥',
        recipe: '1. 다양한 나물을 준비합니다. 2. 밥 위에 나물과 계란 후라이를 올립니다. 3. 고추장과 참기름을 넣고 비벼 먹습니다.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664472661001-39634d19b48f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '파스타',
        recipe: '1. 끓는 물에 파스타 면을 삶습니다. 2. 팬에 올리브유와 마늘을 볶습니다. 3. 소스와 면을 넣고 함께 볶아냅니다.',
        imageUrl: 'https://images.unsplash.com/photo-1579684385127-6c8a77d7c674?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

const container = document.getElementById('suggestion-container');

suggestions.forEach(suggestion => {
    const card = document.createElement('dinner-suggestion');
    card.setAttribute('title', suggestion.title);
    card.setAttribute('recipe', suggestion.recipe);
    card.setAttribute('imageUrl', suggestion.imageUrl);
    container.appendChild(card);
});
