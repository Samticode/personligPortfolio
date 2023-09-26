const section = document.getElementById('section');
window.addEventListener('load', () => {
    section.style.display = '';
    loading.style.display = 'none';
    window.scrollTo({
        top: '0%',
    });
});

const loading = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
let words = ['Samti',  'sin', 'portfolio'];
let fonts = ["'Bebas Neue', sans-serif","'Ysabeau SC', sans-serif","'Bacasime Antique', serif", "font-family: 'Raleway', sans-serif;"];
let loadingIndex = 0;
let fontIndex = 0;

function changeWord() {
    loadingText.textContent = words[loadingIndex];
    loadingText.style.fontFamily = fonts[fontIndex];

    loadingIndex = (loadingIndex + 1) % words.length;
    fontIndex = (fontIndex + 1) % fonts.length;
}

setInterval(changeWord, 300)

//-----------------//

const scrollBar = document.getElementById('scroll-bar');
const body = document.querySelector('body');

function animationScrollBar() {
    let scrollDistance = -body.getBoundingClientRect().top;
    let progressHeight = (scrollDistance / (body.getBoundingClientRect().height - 
    document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressHeight);
    scrollBar.style.width = value + "%";

    if(value < 0) {
        scrollBar.style.width = "0%"
    }
}

window.addEventListener("scroll", animationScrollBar);

//-----------------//

const rightDivs = document.querySelectorAll(".right");
const leftDivs = document.querySelectorAll(".left");

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showLeft");
        } else {
            entry.target.classList.remove("showLeft");
        }
    })
});

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showRight");
        } else {
            entry.target.classList.remove("showRight");
        }
    })
});

rightDivs.forEach((el) => observerRight.observe(el));
leftDivs.forEach((el) => observerLeft.observe(el));

//------------------//

const menuButton = document.getElementById('barsButton');
const menuBar = document.getElementById('menuBar');
const greyFilter = document.getElementById('greyFilter');
const menuOptionOption = document.querySelectorAll('.menuOptionOption');

let buttonIndex = 1;

menuButton.addEventListener('click', () => {
    if (buttonIndex === 1) {
        greyFilter.classList.add('greyFilter');
        document.body.style.overflow = 'hidden';
        menuBar.classList.remove('menuBarHidden');
        menuBar.classList.add('menuBar');
        buttonIndex = 2;
    } else if (buttonIndex === 2) {
        greyFilter.classList.remove('greyFilter');
        document.body.style.overflow = 'auto';
        menuBar.classList.remove('menuBar');
        menuBar.classList.add('menuBarHidden');
        buttonIndex = 1;
    }
});

greyFilter.addEventListener('click', () => {
    greyFilter.classList.remove('greyFilter');
    document.body.style.overflow = 'auto';
    menuBar.classList.remove('menuBar');
    menuBar.classList.add('menuBarHidden');
    buttonIndex = 1;
});

//-----------------//

const emailButton = document.getElementById('emailButton');

emailButton.addEventListener('click', () => {
  const recipientAndSubject = 'samtisahmed@gmail.com';
  const subject = 'Hei, jeg kommer fra nettsiden din!';

  const mailtoLink = `mailto:${recipientAndSubject}?subject=${encodeURIComponent(subject)}`;

  window.location.href = mailtoLink;
});

//-----------------//

const imgDiv = document.getElementById('imgDiv');
const imgDiv2 = document.getElementById('imgDiv2');
const imgDiv3 = document.getElementById('imgDiv3');
const imgDiv4 = document.getElementById('imgDiv4');

imgDiv.addEventListener('click', () => {
    window.open(`https://samticode.github.io/JavascriptAssignment/`, '_blank');
});
imgDiv2.addEventListener('click', () => {
    window.open(`https://samticode.github.io/Husarbeid_Oppgave/`, '_blank');
});
imgDiv3.addEventListener('click', () => {
    window.open(`https://github.com/Samticode/dataAnalasys/blob/main/sdInnlevering.ipynb`, '_blank');
});
imgDiv4.addEventListener('click', () => {
    window.open(`https://samticode.github.io/min_valgomat/`, '_blank');
});

//-----------------//

let scrollButtons = document.getElementsByClassName("menuOptionOption");

function scrollToPercentage(percentage) {
    let containerHeight = document.body.clientHeight; // Get the height of the container
    let targetPosition = containerHeight * (percentage / 100);

    // Use smooth scrolling for a smooth animation
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });

    greyFilter.classList.remove('greyFilter');
    document.body.style.overflow = 'auto';
    menuBar.classList.remove('menuBar');
    menuBar.classList.add('menuBarHidden');
    buttonIndex = 1;
}

for (let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener("click", function() {
        let percentage = this.getAttribute("data-scroll-percentage");
        scrollToPercentage(percentage);
    });
}
