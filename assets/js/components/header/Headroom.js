import Headroom from 'headroom.js';



function showAlt() {
    const smallHeader = document.querySelector('#smallHeader');
    if (smallHeader) {
        smallHeader.classList.add('opacity-100');
        smallHeader.classList.remove('opacity-0');
    }

}

function removeAlt() {
    const smallHeader = document.querySelector('#smallHeader');
    if (smallHeader) {
        smallHeader.classList.add('opacity-0');
        smallHeader.classList.remove('opacity-100');

    }
}

const headroomOptions = {
    "offset": 205,
    "tolerance": 1,
    "classes": {
        initial: "headroom--fixed"
    },
    onUnpin: function() {
        return showAlt();
    },
    onPin: function() {
        return removeAlt();
    }
}

const HeadroomComponent = {
    init() {
        const mainHeader = document.querySelector('#fullHeader');
        const HeadroomInit = new Headroom(mainHeader, headroomOptions);

        HeadroomInit.init();
    }
}



export default HeadroomComponent;