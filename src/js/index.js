// import aos from './components/aos';
import news from './components/news';
import sidebarLogic from './components/sidebarLogic';
import megaMenu from './components/megaMenu';
import modal from './components/modal';
import tabsLogic from './components/tabsLogic';

$( document ).ready(function() {

    news();
    sidebarLogic();
    megaMenu();
    modal();
    tabsLogic();
    // aos(); 
});