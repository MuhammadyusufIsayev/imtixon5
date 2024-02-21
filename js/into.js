const imgSide = document.querySelector('.img-side');
const aboutSide = document.querySelector('.about-side');
const nightMode = document.querySelector('.night-mode');
const main = document.querySelector('main');
const back = document.querySelector('.back');
const backImg = document.querySelector('.back-img');

const country = JSON.parse(localStorage.getItem('country'));
imgSide.innerHTML = `
    <img src="${country.flags.png}" alt="">
`;

const currencies = Object.values(country.currencies).map(currency => {
    return `${currency.name}`;
}).join(', ');


aboutSide.innerHTML = `
    <h2>${country.name.common}</h2>
    <div class="country-info">
        <p><span>Name: </span>${country.name.official}</p>
        <p><span>Population: </span>${country.population}</p>
        <p><span>Region: </span>${country.region}</p>
        <p><span>Capital: </span>${country.capital}</p>
        <p><span>Area: </span>${country.area}</p>
        <p><span>Language: </span>${Object.values(country.languages)}</p>
        <p><span>Currencies: </span>${currencies}</p>
        <p><span>Timezone: </span>${country.timezones}</p>
    </div>
`

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    main.classList.add('dark-main');
    back.classList.add('dark-back');
    backImg.src = '/img/back-white.svg';
}

nightMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    main.classList.toggle('dark-main');
    back.classList.toggle('dark-back');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');  
        backImg.src = '/img/back-white.svg';
    }
    else {
        localStorage.setItem('theme', 'light');
        backImg.src = '/img/back.svg';
    }
})

back.addEventListener('click', () => {
    window.history.back();
})