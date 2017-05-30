// ==UserScript==
// @name         duproprio
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://duproprio.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    addGlobalStyle('.search-results-feature-properties {display: none !important; }');
    addGlobalStyle('.search-results-listings-container__main-content {max-width: none !important; }');    
    
    addGlobalStyle('.search-results-listings-third-column {display: none !important; }');
    addGlobalStyle('.search-results-listings-form__alert-email {display: none !important; }');
    addGlobalStyle('.search-results-listings-list__item {max-width: 23% !important; }');  
        
    addGlobalStyle('.photo-viewer__slide {max-width: 400px !important; }');
    addGlobalStyle('.photo-viewer__slide.slick-current {max-width: 408px !important; }'); 
    addGlobalStyle('.photo-viewer__slide::after {background: none !important; }');    
    
    addGlobalStyle('.listing-costs-mortgage {display: none !important; }');    
    addGlobalStyle('.featured-company {display: none !important; }');    
   
    addGlobalStyle('.slick-slide {border-left:  4px solid #f6f6f6 !important; }');
    addGlobalStyle('.slick-slide {border-right:  4px solid #f6f6f6 !important; }');
    
    
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
