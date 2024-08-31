function init() {
    let karta = new ymaps.Map("id__map", {
        center: [55.75666270643997, 37.63078378750721],
        zoom: 13
    })

    let sitoPianoMetka = new ymaps.Placemark([55.77163373753056, 37.681723877058936], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let chickoRico = new ymaps.Placemark([55.76860886656986, 37.6826654119861], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let dom = new ymaps.Placemark([55.758614900211384,37.645359713132414], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let beerMood = new ymaps.Placemark([55.760661568959506,37.64639049999989], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let rovesnik = new ymaps.Placemark([55.76244826577171,37.60591613558194], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })
    
    let belfast = new ymaps.Placemark([55.74514356897923,37.630678499999945], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let sitotverskaya = new ymaps.Placemark([55.76374056896741,37.60628049999999], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })
    
    let krapiva = new ymaps.Placemark([55.76161856896198,37.640658999999985], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })
    
    let elki = new ymaps.Placemark([55.7521410689674,37.59241949999994], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let losbandidos = new ymaps.Placemark([55.75718656895057,37.63234049999998], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })
    
    let morepiva = new ymaps.Placemark([55.73859606899219,37.62673499999999], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let gambrinus = new ymaps.Placemark([55.73543906898409,37.59228449999994], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let pubnopub = new ymaps.Placemark([55.74142906899947,37.65279549999997], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let bibirevo = new ymaps.Placemark([55.74617756898189,37.56732050000001], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let volkovskayaPivovarnya = new ymaps.Placemark([55.75926856895591,37.66345849999997], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let haratsPub = new ymaps.Placemark([55.775793068968554,37.585556499999974], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let naKranah = new ymaps.Placemark([55.77174206895815,37.619593499999986], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let morepivabarik = new ymaps.Placemark([55.75958256895669,37.583040999999916], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    let gambrinus__ploshad = new ymaps.Placemark([55.74648656898269,37.67514549999998], {}, {
        iconLayout: 'default#image', // этот параметр отвечает за то, что будет у нас работать - картинка или дефолтное что-то/ default#image - мы говорим карте что хотим исользовать свою картинку
        iconImageHref: 'images/beer_red.png', // путь до нашего изображения(можно и ссылку на картинку (она у меня нихуя не вставлялась))
        iconImageSize: [40, 40], // размер картинки - 20 на 20 пкс например
        iconImageOffset: [-22, -30] // отступ от центра
    })

    karta.controls.remove('searchControl'); // удаляем поиск
    karta.controls.remove('geolocationControl'); // удаляем геолокацию
    karta.controls.remove('trafficControl'); // удаляем контроль трафика
    karta.controls.remove('typeSelector'); // удаляем тип
    karta.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    karta.controls.remove('zoomControl'); // удаляем контрол зуммирования
    karta.controls.remove('rulerControl'); // удаляем контрол правил
    // karta.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    karta.geoObjects.add(sitoPianoMetka)
    karta.geoObjects.add(chickoRico)
    karta.geoObjects.add(dom)
    karta.geoObjects.add(beerMood)
    karta.geoObjects.add(rovesnik)
    karta.geoObjects.add(belfast)
    karta.geoObjects.add(sitotverskaya)
    karta.geoObjects.add(krapiva)
    karta.geoObjects.add(losbandidos)
    karta.geoObjects.add(morepiva)
    karta.geoObjects.add(elki)
    karta.geoObjects.add(gambrinus)
    karta.geoObjects.add(pubnopub)
    karta.geoObjects.add(bibirevo)
    karta.geoObjects.add(volkovskayaPivovarnya)
    karta.geoObjects.add(haratsPub)
    karta.geoObjects.add(naKranah)
    karta.geoObjects.add(morepivabarik)
    karta.geoObjects.add(gambrinus__ploshad)

    const sitoPiano__modal = document.querySelector('.sitoPiano__modal')

    const chickoRicko__modal = document.querySelector('.chickoRicko__modal')

    const crossmodal = document.querySelectorAll('.cross__cross') 

    const dom__modal = document.querySelector('.dom__modal')

    const beerMood__modal = document.querySelector('.beerMood__modal')

    const rovesnik__modal = document.querySelector('.rovesnik__modal')
    
    const belfast__modal = document.querySelector('.belfast__modal')

    const sitotver__modal = document.querySelector('.sitotverskaya__modal')

    const krapiva__modal = document.querySelector('.krapiva__modal')

    const elki__modal = document.querySelector('.elki__modal')

    const losbandidos__modal = document.querySelector('.losbandidos__modal') 

    const morepiva__modal = document.querySelector('.morepiva__modal')

    const gambrinus__modal = document.querySelector('.gambrinus__modal')

    const pubnopub__modal = document.querySelector('.pubnopub__modal')

    const bibirevo__modal = document.querySelector('.bibirevo__modal')

    const volkovskaya__modal = document.querySelector('.volkovskaya__modal')

    const haratspub__modal = document.querySelector('.haratspub__modal')

    const nakranah__modal = document.querySelector('.nakranah__modal')

    const morepivabarik__modal = document.querySelector('.morepivabarik__modal')

    const gambrinus__ploshad__modal = document.querySelector('.gambrinus-ploshad__modal')

    sitoPianoMetka.events.add('click', () => {
        sitoPiano__modal.classList.add('active')
    })

    chickoRico.events.add('click', () => {
        chickoRicko__modal.classList.add('active')
    })

    dom.events.add('click', () => {
        dom__modal.classList.add('active')
    })

    beerMood.events.add('click', () => {
        beerMood__modal.classList.add('active')
    })

    rovesnik.events.add('click', () => {
        rovesnik__modal.classList.add('active')
    })

    belfast.events.add('click', () => {
        belfast__modal.classList.add('active')
    })

    sitotverskaya.events.add('click', () => {
        sitotver__modal.classList.add('active')
    })

    krapiva.events.add('click', () => {
        krapiva__modal.classList.add('active')
    })

    elki.events.add('click', () => {
        elki__modal.classList.add('active')
    })

    losbandidos.events.add('click', () => {
        losbandidos__modal.classList.add('active')
    })

    morepiva.events.add('click', () => {
        morepiva__modal.classList.add('active')
    })

    gambrinus.events.add('click', () => {
        gambrinus__modal.classList.add('active')
    })

    pubnopub.events.add('click', () => {
        pubnopub__modal.classList.add('active')
    })

    bibirevo.events.add('click', () => {
        bibirevo__modal.classList.add('active')
    })

    volkovskayaPivovarnya.events.add('click', () => {
        volkovskaya__modal.classList.add('active')
    })

    haratsPub.events.add('click', () => {
        haratspub__modal.classList.add('active')
    })

    naKranah.events.add('click', () => {
        nakranah__modal.classList.add('active')
    })

    morepivabarik.events.add('click', () => {
        morepivabarik__modal.classList.add('active')
    })

    gambrinus__ploshad.events.add('click', () => {
        gambrinus__ploshad__modal.classList.add('active')
    })

    crossmodal.forEach((item) => {
        item.addEventListener('click', () => {
            sitoPiano__modal.classList.remove('active')
            chickoRicko__modal.classList.remove('active')
            dom__modal.classList.remove('active')
            beerMood__modal.classList.remove('active')
            rovesnik__modal.classList.remove('active')
            belfast__modal.classList.remove('active')
            sitotver__modal.classList.remove('active')
            krapiva__modal.classList.remove('active')
            elki__modal.classList.remove('active')
            losbandidos__modal.classList.remove('active')
            morepiva__modal.classList.remove('active')
            gambrinus__modal.classList.remove('active')
            pubnopub__modal.classList.remove('active')
            bibirevo__modal.classList.remove('active')
            volkovskaya__modal.classList.remove('active')
            haratspub__modal.classList.remove('active')
            nakranah__modal.classList.remove('active')
            morepivabarik__modal.classList.remove('active')
            gambrinus__ploshad__modal.classList.remove('active')
        })
    }) 


    new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 1000,
        direction: 'horizontal',
        loop: true,
        speed: 900,
        // // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true
        },
    });

}

ymaps.ready(init)
