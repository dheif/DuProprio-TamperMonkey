// ==UserScript==
// @name         duproprio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://duproprio.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    addGlobalStyle('.search-results-container__featured-properties {display: none !important; }');
    addGlobalStyle('.search-results-listings-third-column {display: none !important; }');
    addGlobalStyle('.search-results-listings-form__alert-email {display: none !important; }');
    addGlobalStyle('.search-results-listings-list__item {max-width: 20% !important; }');
    addGlobalStyle('.photo-viewer__slide {max-width: 400px !important; }');
    addGlobalStyle('.photo-viewer__slide.slick-current {max-width: 408px !important; }');
    
    
})();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}