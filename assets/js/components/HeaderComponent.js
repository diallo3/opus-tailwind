import HeadroomComponent from "./header/Headroom";
import MmenuComponent from "./header/Mmenu";
import MidnightJSHeadComponent from "./header/Midnight";

const HeaderComponent = {

    init() {
        HeadroomComponent.init();
        MmenuComponent.init();
        MidnightJSHeadComponent.init();
    }

}

export default HeaderComponent;