import AOS from 'aos';
import 'aos/dist/aos.css';



const ScrollEffects = {

    init() {
        AOS.init({
            disable: 'mobile'
        });
    }
}

export default ScrollEffects;