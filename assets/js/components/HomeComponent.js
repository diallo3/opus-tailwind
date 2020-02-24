import Swiper from 'swiper';
import FullPage from 'fullpage.js';
import 'swiper/css/swiper.min.css';
import 'fullpage.js/dist/fullpage.min.css';

const HomeComponent = {

    init() {
        const fullPage = new FullPage('#fullPage', {
            //options here
            licenseKey: 'A73E411E-6B23478C-9C5BADBA-9DE307FE',
            menu: '#fullPageMenu',
            sectionSelector: '.fs-slide',
            anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Tax Income', 'Tax Codes', 'Solutions', 'The Difference', 'Bottom Line', 'Get Started'],
            autoScrolling: false,
        });

        const homeSlider = new Swiper('.swiper-container', {
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            autoplay: {
                delay: 5000,
            }
        })
    }

}

export default HomeComponent;