// you can import modules from the theme lib or even from
// NPM packages if they support it…
import ExampleComponent1 from "./components/ExampleComponent1";

// you can also require modules if they support it…
// const ExampleModule2 = require('./components/example-2');

// Some convenient tools to get you started…
import ReplaceObfuscatedEmailAddresses from "./components/ReplaceObfuscatedEmailAddresses";
import AnimateOnPageLinks from "./components/AnimateOnPageLinks";
import ExportSample from "./components/ExportSample";

import Header from "./components/Header";
import ScrollEffects from "./components/ScrollEffects";
import HomeComponent from "./components/HomeComponent";

Header.init();
ScrollEffects.init();




// Initialise our components on jQuery.ready…
jQuery(function($) {
    // ExampleComponent1.init();
    // ExampleModule2.init();
    // ReplaceObfuscatedEmailAddresses.init();
    // AnimateOnPageLinks.init();
    HomeComponent.init();
    console.log('this working?');
});