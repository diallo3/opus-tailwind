import Mmenu from "mmenu-js";
import 'mburger-css';

const MmenuComponent = {

    init() {
        new Mmenu("#mobileNav", {
            // options
            "extensions": [
                "position-right"
            ]
        }, {
            // configuration
            offCanvas: {
                page: {
                    selector: "#mainContent"
                }

            }
        });
    }

}

export default MmenuComponent;