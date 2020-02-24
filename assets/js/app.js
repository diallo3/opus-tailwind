// Some convenient tools to get you started…
import ReplaceObfuscatedEmailAddresses from "./components/ReplaceObfuscatedEmailAddresses";
import AnimateOnPageLinks from "./components/AnimateOnPageLinks";

import Header from "./components/HeaderComponent";
import ScrollEffects from "./components/ScrollEffects";
import HomeComponent from "./components/HomeComponent";
import SocialShare from "./components/SocialShare";

// Initialise our components on jQuery.ready…
jQuery(function($) {
    // ExampleComponent1.init();
    // ExampleModule2.init();
    // ReplaceObfuscatedEmailAddresses.init();
    // AnimateOnPageLinks.init();

    ScrollEffects.init();
    HomeComponent.init();
    Header.init();
    SocialShare.init();

});