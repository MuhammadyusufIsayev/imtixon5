const flagsWrapper = document.querySelector('.flags-wrapper');
const sort = document.querySelector('.sort');
const regions = document.querySelector('.regions');
const searchInput = document.querySelector('.search-input');
const nightMode = document.querySelector('.night-mode');

const header = document.querySelector('header');
const main = document.querySelector('main');

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            const flag = document.createElement('div');
            flag.classList.add('flag');
            flag.innerHTML = `
                <div class="flag-img">
                    <img src="${country.flags.png}" alt="">
                </div>
                <div class="flag-info">
                    <h3>${country.name.common}</h3>
                    <p><span>Population: </span>${country.population}</p>
                    <p><span>Region: </span>${country.region}</p>
                    <p><span>Capital: </span>${country.capital}</p>
                </div>
            `;
            flagsWrapper.appendChild(flag);

            flag.addEventListener('click', () => {
                localStorage.setItem('country', JSON.stringify(country));
                window.location.href = '/pages/into.html';
            })
        });
    })
    .catch(err => console.log(err))


sort.addEventListener('change', () => {
    if (sort.value === 'title') {
        flagsWrapper.innerHTML = '';
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => {
                    return a.name.common.localeCompare(b.name.common);
                });
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);

                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                        window.location.href = '/pages/into.html';
                    })
                });
            })
            .catch(err => console.log(err))
    }
    else if (sort.value === 'population') {
        flagsWrapper.innerHTML = '';
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => {
                    return b.population - a.population
                })
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);
                    
                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                        window.location.href = '/pages/into.html';
                    })
                })
            })
    }
    else if (sort.value === 'region') {
        flagsWrapper.innerHTML = '';
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => {
                    if (a.region === 'America' || a.region === 'Europe') return -1;
                    if (b.region === 'America' || b.region === 'Europe') return 1;
                    if (a.region === 'Asia') return 1;
                    if (b.region === 'Asia') return -1;
                    return a.region.localeCompare(b.region);
                });
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);

                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                        window.location.href = '/pages/into.html';
                    })
                })
            })
    }
    else if (sort.value === 'area') {
        flagsWrapper.innerHTML = '';
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => {
                    return b.area - a.area
                })
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);

                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                        window.location.href = '/pages/into.html';
                    })
                })
            })
    }
    else {
        flagsWrapper.innerHTML = '';
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);

                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                    })
                })
            })
    }
})

searchInput.addEventListener('keyup', () => {
    const searchValue = searchInput.value;
    const allFlags = document.querySelectorAll('.flag');
    allFlags.forEach(flag => {
        const flagName = flag.querySelector('h3').textContent;
        if (flagName.toLowerCase().includes(searchValue.toLowerCase())) {
            flag.style.display = 'block';
        }
        else {
            flag.style.display = 'none';
        }
    })
})

regions.addEventListener('change', () => {
    flagsWrapper.innerHTML = ''; 
    const selectedRegion = regions.value;
    if (selectedRegion === 'all') {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => {
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);

                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                        window.location.href = '/pages/into.html';
                    })
                });
            })
            .catch(error => console.error('Error:', error));
    } else {
        fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                data.forEach(country => {
                    const flag = document.createElement('div');
                    flag.classList.add('flag');
                    flag.innerHTML = `
                        <div class="flag-img">
                            <img src="${country.flags.png}" alt="">
                        </div>
                        <div class="flag-info">
                            <h3>${country.name.common}</h3>
                            <p><span>Population: </span>${country.population}</p>
                            <p><span>Region: </span>${country.region}</p>
                            <p><span>Capital: </span>${country.capital}</p>
                        </div>
                    `;
                    flagsWrapper.appendChild(flag);

                    flag.addEventListener('click', () => {
                        localStorage.setItem('country', JSON.stringify(country));
                        window.location.href = '/pages/into.html';
                    })
                });
            })
            .catch(error => console.error('Error:', error));
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
        header.classList.add('dark-head');
        main.classList.add('dark-main');
    }
});

nightMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    header.classList.toggle('dark-head');
    main.classList.toggle('dark-main');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }

})