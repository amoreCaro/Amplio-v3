import tabsLogic from './components/tabsLogic';
import calculator from './components/calculator';
import acordion from './components/acordion';
import showText from './components/showText';
import header from './components/header';

$( document ).ready(function() {
    tabsLogic();
    calculator();
    acordion();
    showText();
    header();
    // aos(); 
});