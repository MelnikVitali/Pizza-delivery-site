'use strict';
const burger = $('.burger-menu');
const navMenu = $('.nav-menu');

$(burger).on('click', () => {
    $(navMenu).toggleClass('nav-menu_hidden');
    $(burger).toggleClass('burger-menu_crossed');
});