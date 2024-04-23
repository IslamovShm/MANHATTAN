const dataMenu = [
    {
        src: "img/menu/Amet Donec.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec2.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec3.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec4.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec5.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec6.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec7.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec8.png",
        name: "Amet Donec.",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec2.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec3.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec4.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec5.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec6.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec7.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
    {
        src: "img/menu/Amet Donec8.png",
        name: "Amet Donec.2",
        price: 550,
        weight: "200 гр",
        inf: "Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.",
    },
]

let menuBtn = document.querySelector('#menu-btn')
let navBar = document.querySelector('.header_navbar')
let liNav = Array.from(navBar.getElementsByTagName('a'))

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times')
    navBar.classList.toggle('active')
}

liNav.forEach(el => {
    el.onclick = () => {
        menuBtn.classList.toggle('fa-times')
        navBar.classList.toggle('active')
    }
})


let gallery = document.querySelector('.swiper-wrapper')


const renderMenu = () => {
    let count = 0
    let menuGalleryBlock

    dataMenu.forEach(card => {
        if (count === 0 || count > 7) {
            let swiperSlide = document.createElement('div')
            swiperSlide.classList.add('swiper-slide')
            menuGalleryBlock = document.createElement('div')
            menuGalleryBlock.classList.add('menu-gallery_block')
            swiperSlide.insertAdjacentElement('beforeend', menuGalleryBlock)
            gallery.insertAdjacentElement('beforeend', swiperSlide)
        }

        menuGalleryBlock.insertAdjacentHTML('beforeend', `
            <div class="menu_item">
                <div class="menu_item-img-block">
                    <img src="${card.src}" alt="${card.name}" class="menu_item-img">
                </div>
                <div class="menu_item-inf-block">
                    <div class="menu_item-name-price">
                        <h3 class="menu_item-name">${card.name}</h3>
                        <p class="menu_item-price">${card.price} ₽</p>
                    </div>
                    <p class="menu_item-weight">${card.weight}</p>
                    <p class="menu_item-inf">${card.inf}</p>
                </div>
            </div>
        `)

        count++

        if(count >= 8){
            count = 0
        }
    })
}

renderMenu()


var swiper = new Swiper(".menu-gallery_wrapper", {
    pagination: 'true',
    navigation: {
      nextEl: ".menu_gallery_button-right",
      prevEl: ".menu_gallery_button-left",
    },
})