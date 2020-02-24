import 'midnight.js';
const $ = window.jQuery;
const $window = window.$window || $(window);

const MidnightJSHeadComponent = {
    init() {
        $('#fullHeader').midnight();
        $('#smallHeader').midnight();
    }
}

export default MidnightJSHeadComponent;