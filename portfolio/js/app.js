const menu = [
    {
        id: 1,
        title: "Web Dev",
        category: "web dev",
        demo: "https://md-aslam-ali.github.io/project-one/color%20picker/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "App dev",
        category: "App dev",
        demo: "https://md-aslam-ali.github.io/Project-Ten/text-generate/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Design",
        category: "Design",
        demo: "https://md-aslam-ali.github.io/project-three/Grocery%20Bud/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "web dev",
        category: "web dev",
        demo: "https://md-aslam-ali.github.io/project-four/Manu%20Project/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "App dev",
        category: "App dev",
        demo: "https://md-aslam-ali.github.io/project-five/Modal%20Project/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Design",
        category: "Design",
        demo: "https://md-aslam-ali.github.io/project-six/navbar/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "App dev",
        category: "App dev",
        demo: "https://md-aslam-ali.github.io/project-seven/scroll%20Project/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "web dev",
        category: "web dev",
        demo: "https://md-aslam-ali.github.io/project-Eight/slider/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Design",
        category: "Design",
        demo: "https://md-aslam-ali.github.io/Project-Nine/tabs%20project/index.html",
        demoName: "View More",
        img: "./images/item-1.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];



const sectionCenter = document.querySelector('.section-center');
const selectBtn = document.querySelectorAll('.filter-btn');

selectBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        selectBtn.forEach(function (button) {
            button.classList.remove("active")
        })
        btn.classList.add('active');
        const categary = e.currentTarget.dataset.id;
        const menuCategary = menu.filter(function (menuItem) {
            if (menuItem.category === categary) {
                return menuItem;
            }
        })

        if (categary === 'all') {
            displayItems(menu);
        }
        else {
            displayItems(menuCategary);
        }

        // console.log(menuCategary)
    })
})


function displayItems(menuItems) {
    let displayItem = menuItems.map(function (item) {
        return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <div class="page-info">
                    <header>
                        <h4>${item.title}</h4>
                        <a href="${item.demo}" target="_blank" class="price">${item.demoName}</a>
                    </header>
                </div>
            </article>
`;
    });

    displayItem = displayItem.join("");
    sectionCenter.innerHTML = displayItem;
}


window.addEventListener('DOMContentLoaded', function () {
    displayItems(menu);

})



const navbar = document.getElementById('nav');

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
})


const skillWrap = document.querySelector(".skills");
const skillsBar = document.querySelectorAll(".skill-progress");


window.addEventListener('scroll', function () {
    skillEffects(skillWrap)
    countUp();
})

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}


function skillEffects() {
    if (!checkScroll(skillWrap)) return;
    skillsBar.forEach(function (skill) {
        skill.style.width = skill.dataset.progress;
    })
}




const records = document.querySelector(".records");
const number = document.querySelectorAll(".number");

function countUp() {
    if (!checkScroll(records)) return;
    number.forEach(function (numb) {
        const updateCount = () => {
            let currentNum = +numb.innerHTML;
            let maxNum = +numb.dataset.num;
            let speed = 100;
            const increament = Math.ceil(maxNum / speed)

            if (currentNum < maxNum) {
                numb.textContent = currentNum + increament;
                setTimeout(updateCount, 1)
            } else {
                numb.textContent = maxNum;
            }
        }
        setTimeout(updateCount, 500)
    })

}



var mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});





const toggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


// toggle.addEventListener('click', function () {

//     links.classList.toggle('show-links')

// })



toggle.addEventListener('click', function () {
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    console.log(linksContainerHeight)
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight)

    if (linksContainerHeight === 0) {
        links.classList.add('show-links')
    } else {
        links.classList.remove('show-links')
    }

})


const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        links.classList.remove('show-links')
    })
})


const footer_input = document.querySelector(".footer-input");

footer_input.addEventListener('focus', () => {
    footer_input.classList.add('focus');
})

footer_input.addEventListener('blur', () => {
    if(footer_input.value != "") return;
    footer_input.classList.remove('focus');
})


