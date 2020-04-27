"use strict";

import account from './data.js';

class month {
    constructor(target){
        this.target = target;
       
        this.menesiai();
        this.balansas();
        console.log(this.target)
    }

 menesiai(){
        const DOM = document.querySelector(this.target);
        if(!DOM){
            throw 'ERROR';
        }
        let HTML = '';
        const mene = [suosis, vasaris, kovas, balandis, geguze, birzelis, liepa, rugpjutis, rugsejis, spalis, lapkritis, gruodis ]
        
        for(let i=0; i<account.length; i++){
            let numeris = account[i];
            for(let i=0; i<mene.length; i++){
                if(i === numeris.month ){
                    HTML += `<div id="mon" class="cell">${mene[i]}</div>`
                }
            }
        }
    DOM.innerHTML = HTML;
    }

    HTML = '';
    balansas(){
        const DOMA = document.querySelector(this.target);
        for(let i=0; i<account.length; i++){
            const ip = account[i];
            let iplaukos = ip.income;
            
            for(let i=0; i<account.length; i++){
                let islaidos = ip.expense;

                if(iplaukos!=0 && islaidos!=0){
                    HTML += `<div id="bal" class="cell">${iplaukos[i] - islaidos[i] } Eur</div>` 
                } else if (!iplaukos) {
                    HTML += `<div i id="isl" class="cell">${islaidos[i]} Eur</div>`
                 }  else {
                    HTML += `<div id="ipl" class="cell">${iplaukos[i]} Eur</div>`
                }
            }
        }
    }
    DOMA.innerHTML = HTML;

}


export default test;