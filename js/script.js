'use strict';
import 'nodelist-foreach-polyfill';

import { tabs } from './modules/tabs'
import { modal } from './modules/modal'
import { timer } from './modules/timer'
import { calc } from './modules/calc'
import { cards } from './modules/cards'
import { forms } from './modules/forms'
import { slider } from './modules/slider'

document.addEventListener('DOMContentLoaded', () => {
    tabs();
    modal('.modal', '[data-modal]');
    timer();
    calc();
    cards();
    forms('form');
    slider();

});