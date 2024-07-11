document.addEventListener('DOMContentLoaded', function () {
    const cardsData = [
        {
            imgSrc: 'https://reqres.in/img/faces/1-image.jpg',
            name: 'ONE',
            email: 'george.bluth@reqres.in',
            fullName: 'George Bluth'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/2-image.jpg',
            name: 'TWO',
            email: 'janet.weaver@reqres.in',
            fullName: 'Janet Weaver'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/3-image.jpg',
            name: 'THREE',
            email: 'emma.wong@reqres.in',
            fullName: 'Emma Wong'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/4-image.jpg',
            name: 'FOUR',
            email: 'eve.holt@reqres.in',
            fullName: 'Eve Holt'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/5-image.jpg',
            name: 'FIVE',
            email: 'charles.morris@reqres.in',
            fullName: 'Charles Morris'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/6-image.jpg',
            name: 'SIX',
            email: 'tracey.ramos@reqres.in',
            fullName: 'Tracey Ramos'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/7-image.jpg',
            name: 'SEVEN',
            email: 'michael.lawson@reqres.in',
            fullName: 'Michael Lawson'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/8-image.jpg',
            name: 'EIGHT',
            email: 'lindsay.ferguson@reqres.in',
            fullName: 'Lindsay Ferguson'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/9-image.jpg',
            name: 'NINE',
            email: 'tobias.funke@reqres.in',
            fullName: 'Tobias Funke'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/10-image.jpg',
            name: 'TEN',
            email: 'byron.fields@reqres.in',
            fullName: 'Byron Fields'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/11-image.jpg',
            name: 'ELEVEN',
            email: 'george.edwards@reqres.in',
            fullName: 'George Edwards'
        },
        {
            imgSrc: 'https://reqres.in/img/faces/12-image.jpg',
            name: 'TWELVE',
            email: 'rachel.howell@reqres.in',
            fullName: 'Rachel Howell'
        }
    ];

    const bdGrid = document.querySelector('.bd-grid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let startIndex = 0;
    const cardsPerPage = 3;

    function loadCards() {
        const endIndex = Math.min(startIndex + cardsPerPage, cardsData.length);
        for (let i = startIndex; i < endIndex; i++) {
            const cardData = cardsData[i];

            const article = document.createElement('article');
            article.classList.add('card');

            article.innerHTML = `
                <div class="card__img">
                    <div class="avatar">
                        <img src="${cardData.imgSrc}" alt="">
                    </div>
                </div>
                <div class="card__name">
                    <p>${cardData.name}</p>
                </div>
                <div class="card__precis">
                    <a class="card__icon heart-icon"><ion-icon name="heart-outline"></ion-icon></a>
                    <div>
                        <span class="card__preci card__preci--before">${cardData.email}</span>
                        <span class="card__preci card__preci--now">${cardData.fullName}</span>
                    </div>
                    <a href="mailto:${cardData.email}" class="card__icon"><ion-icon name="mail-outline"></ion-icon></a>
                </div>
            `;

            bdGrid.appendChild(article);
        }

        startIndex += cardsPerPage;

        if (startIndex >= cardsData.length) {
            loadMoreBtn.textContent = 'No data';
            loadMoreBtn.disabled = true;
        }

        // Add click event listener to each new heart icon
        addHeartIconEventListeners();
    }

    function addHeartIconEventListeners() {
        const heartIcons = document.querySelectorAll('.heart-icon');

        // Add click event listener to each heart icon
        heartIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                this.classList.toggle('clicked');
            });
        });
    }

    loadCards();

    loadMoreBtn.addEventListener('click', loadCards);
});
