/* TODO: inserite il codice JavaScript necessario a completare il MHW! */


// ------------------------- VARIABILI GLOBALI --------------------------------
var indice1=0;
var ris1;   //mettere il risultato della prima domanda sia prima volta, sia in altre volte
var ok;
var indice2=0;
var ris2;
var indice3=0;
var ris3;

//------BOTTONE--------------



function ripristina(){
    console.log('ciao');
    
     for (const box of ListaPrima) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
        box.addEventListener('click',selezionato1); 
        box.style.opacity=1;  //cambia l'opacita a tutte le div che non sono state selezionate
       box.style.backgroundColor = "#f4f4f4";
       const image =ris1[0].querySelector(".checkbox");
       image.src='images/unchecked.png';
       
  
     }
     
     for (const box of ListaSeconda) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
       box.addEventListener('click',selezionato2);
       box.style.opacity=1;  //cambia l'opacita a tutte le div che non sono state selezionate
       box.style.backgroundColor = "#f4f4f4";
       const image =ris2[0].querySelector(".checkbox");
       image.src='images/unchecked.png';
     }
     
     for (const box of ListaTerza) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
        box.addEventListener('click',selezionato3);
        box.style.opacity=1;  //cambia l'opacita a tutte le div che non sono state selezionate
       box.style.backgroundColor = "#f4f4f4";
       const image =ris3[0].querySelector(".checkbox");
       image.src='images/unchecked.png';
    }
    
    lista1.length=0;
    lista2.length=0;
    lista3.length=0;
    
    inserisciLista1();
    inserisciLista2();
    inserisciLista3();
    
    var nullo = document.getElementById("contenitore");
    
    nullo.innerHTML="";

   
}

//---------------------- FUNZIONE PRIMA LISTA ----------------------------------
function selezionato1(event){
    const container = event.currentTarget;   //definisce il div cliccato
 
  if(lista1.length===9){  
    const image =container.querySelector(".checkbox"); //creiamo lista checkbox
    image.src='images/checked.png';
    container.style.backgroundColor = "#cfe3ff";
    
    container.removeEventListener('click',selezionato1);
    
   
    for (let i=0; i<ListaPrima.length; i++) {        //per cercare indice della lista
        indice1=i;
        if(ListaPrima[i]===container) break; 
        
    } 
        
    /* console.log(indice1); */        //stampa l'indice al primo giro
    
    ris1=lista1.splice(indice1, 1);       //facendo questa operazione e inserendo il div dentro, lo vede come un array
    
   /*  console.log(lista1); */         // stampa la lista al primo giro
    
    for (const box of lista1) {        
      box.style.opacity=0.6;  //cambia l'opacita a tutte le div che non sono state selezionate
     
     
      
     }
     
    
   } else if(lista1.length===8){   //quando gia un elemento è stato selezionato
      inserisciLista1(); //facciamo diventare di nuovo 9
      /* console.log(lista1); */      //stampa la lista dopo il primo giro qui deve diventare di nuovo piena la lista
      for (const box of lista1) {        
       box.style.opacity=1;  //cambia l'opacita a tutte le div che non sono state selezionate
       box.style.backgroundColor = "#f4f4f4";
       const image =lista1[indice1].querySelector(".checkbox");
       image.src='images/unchecked.png';
       } 
       
       const image =container.querySelector(".checkbox"); //creiamo lista checkbox
       image.src='images/checked.png';
       container.style.backgroundColor = "#cfe3ff";
    
       container.removeEventListener('click',selezionato1);
    
   
    for (let i=0; i<ListaPrima.length; i++) {        //per cercare indice della lista
        indice1=i;
        if(ListaPrima[i]===container) break; 
        
    } 
        
    
    
    ris1=lista1.splice(indice1, 1);
    console.log(lista1);                           //stampa la lista quando si è scelto il risultato
    
    for (const box of lista1) {        
      box.style.opacity=0.6;  //cambia l'opacita a tutte le div che non sono state selezionate
     }
       
       
       
   }
    console.log(indice1);
    console.log(ris1);
    
    if(lista2.length===8 && lista3.length===8){
       fine();
     }
    

  
}


/*
function eliminaLista(element){
    const indice= ListaPrima.indexOf(element);
    ListaPrima.splice(indice, 1);
    console.log(ListaPrima);
    
}
*/
/*
const boxes= document.querySelectorAll("[data-question-id='one']"); //boxes=lista di tutti i div figli della classe choice-grid
for (const box of boxes) {        //per ogni box(div)che sta dentro boxes, gli aggiungiamo l'evento 
    box.addEventListener('click',selezionatoPrimo);
}

*/






//-----INIZIALIZZAZIONE---------------------




const ListaPrima= document.querySelectorAll("[data-question-id='one']"); //ListaPrima=lista di tutti i div figli della prima domanda, qui li selezioni tutti ma non è lista, poi li sposti dopo
const ListaSeconda= document.querySelectorAll("[data-question-id='two']");
const ListaTerza= document.querySelectorAll("[data-question-id='three']");

const lista1=[];   //inseriamo lista per aggiungere tutti gli elementi della prima
inserisciLista1();

const lista2=[];   //inseriamo lista per aggiungere tutti gli elementi della prima
inserisciLista2();

const lista3=[];   //inseriamo lista per aggiungere tutti gli elementi della prima
inserisciLista3();

function inserisciLista1(){
    lista1.length=0;                   //per rimuovere tutto quello che c'è dentro la lista
    for (const box of ListaPrima) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
  
      box.addEventListener('click',selezionato1);  
      lista1.push(box);
    }
}


//-------------------- SECONDA LISTA -------------------------------------------

function inserisciLista2(){
    lista2.length=0;
for (const box of ListaSeconda) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
  
  box.addEventListener('click',selezionato2);  
  lista2.push(box);
}
}


function selezionato2(event){
    const container = event.currentTarget;   //definisce il div cliccato
    
    
    
   
  if(lista2.length===9){  
    const image =container.querySelector(".checkbox"); //creiamo lista checkbox
    image.src='images/checked.png';
    container.style.backgroundColor = "#cfe3ff";
    
    container.removeEventListener('click',selezionato2);
    
   
    for (let i=0; i<ListaSeconda.length; i++) {        //per cercare indice della lista
        indice2=i;
        if(ListaSeconda[i]===container) break; 
        
    } 
        
    /* console.log(indice1); */        //stampa l'indice al primo giro
    
    ris2=lista2.splice(indice2, 1);
   /*  console.log(lista1); */         // stampa la lista al primo giro
    
    for (const box of lista2) {        
      box.style.opacity=0.6;  //cambia l'opacita a tutte le div che non sono state selezionate
     
     
      
     }
    
   }else if(lista2.length===8){   //quando gia un elemento è stato selezionato
      inserisciLista2(); //facciamo diventare di nuovo 9
      /* console.log(lista1); */      //stampa la lista dopo il primo giro qui deve diventare di nuovo piena la lista
      for (const box of lista2) {        
       box.style.opacity=1;  //cambia l'opacita a tutte le div che non sono state selezionate
       box.style.backgroundColor = "#f4f4f4";
       const image =lista2[indice2].querySelector(".checkbox");
       image.src='images/unchecked.png';
       } 
       
       const image =container.querySelector(".checkbox"); //creiamo lista checkbox
    image.src='images/checked.png';
    container.style.backgroundColor = "#cfe3ff";
    
    container.removeEventListener('click',selezionato2);
    
   
    for (let i=0; i<ListaSeconda.length; i++) {        //per cercare indice della lista
        indice2=i;
        if(ListaSeconda[i]===container) break; 
        
    } 
        
    
    
    ris2=lista2.splice(indice2, 1);
    console.log(lista2);                           //stampa la lista quando si è scelto il risultato
    
    for (const box of lista2) {        
      box.style.opacity=0.6;  //cambia l'opacita a tutte le div che non sono state selezionate
     
     
      
     }
       
       
       
   }
    console.log(indice2);
    console.log(ris2);
    if(lista1.length===8 && lista3.length===8){
       fine();
     }


}

//-------------- TERZA LISTA ----------------



function inserisciLista3(){
    lista3.length=0;                    // per rimuovere tutto quello dentro la lista
for (const box of ListaTerza) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
  
  box.addEventListener('click',selezionato3);  
  lista3.push(box);
}
}


function selezionato3(event){
    const container = event.currentTarget;   //definisce il div cliccato
    
    
    
   
  if(lista3.length===9){  
    const image =container.querySelector(".checkbox"); //creiamo lista checkbox
    image.src='images/checked.png';
    container.style.backgroundColor = "#cfe3ff";
    
    container.removeEventListener('click',selezionato3);
    
   
    for (let i=0; i<ListaTerza.length; i++) {        //per cercare indice della lista
        indice3=i;
        if(ListaTerza[i]===container) break; 
        
    } 
        
    /* console.log(indice1); */        //stampa l'indice al primo giro
    
    ris3=lista3.splice(indice3, 1);
   /*  console.log(lista1); */         // stampa la lista al primo giro
    
    for (const box of lista3) {        
      box.style.opacity=0.6;  //cambia l'opacita a tutte le div che non sono state selezionate
     
     
      
     }
    
   }else if(lista3.length===8){   //quando gia un elemento è stato selezionato
      inserisciLista3(); //facciamo diventare di nuovo 9
      /* console.log(lista1); */      //stampa la lista dopo il primo giro qui deve diventare di nuovo piena la lista
      for (const box of lista3) {        
       box.style.opacity=1;  //cambia l'opacita a tutte le div che non sono state selezionate
       box.style.backgroundColor = "#f4f4f4";
       const image =lista3[indice3].querySelector(".checkbox");
       image.src='images/unchecked.png';
       } 
       
       const image =container.querySelector(".checkbox"); //creiamo lista checkbox
    image.src='images/checked.png';
    container.style.backgroundColor = "#cfe3ff";
    
    container.removeEventListener('click',selezionato3);
    
   
    for (let i=0; i<ListaTerza.length; i++) {        //per cercare indice della lista
        indice3=i;
        if(ListaTerza[i]===container) break; 
        
    } 
        
    
    
    ris3=lista3.splice(indice3, 1);
    console.log(lista3);                           //stampa la lista quando si è scelto il risultato
    
    for (const box of lista3) {        
      box.style.opacity=0.6;  //cambia l'opacita a tutte le div che non sono state selezionate
     
     
      
     }
       
       
       
   }
    console.log(indice3);
    console.log(ris3);
    if(lista2.length===8 && lista1.length===8){
       fine();
     }


}


// ------------ FINE ------------------

function fine(){
    //var myMap = document.querySelector("RESULTS_MAP");
    //console.log(ris1[0].dataset.choiceId);    
    //dato che ris1 è un array (da vedere nel sito html con f12) mettiamo l'indice 0 perche la soluzione è in prima posizione, lo vediamo come array perche mettiamo un div dentro
    const risultato = document.querySelector('#contenitore');
    const header = document.createElement('h1');         //qui per scrivere il titolo
    const testo = document.createElement('h2');          //qui per scrivere il corpo
    const bottone= document.createElement('button');
    
    
    
    
    if (ris2[0].dataset.choiceId===ris3[0].dataset.choiceId){
         console.log(indice2);
         console.log(ris2);
         console.log(ris2[0].dataset.choiceId);
         console.log(ris3[0].dataset.choiceId);
         
         header.textContent=RESULTS_MAP[ris2[0].dataset.choiceId].title;
         risultato.appendChild(header); 
         
         testo.textContent=RESULTS_MAP[ris2[0].dataset.choiceId].contents;
         risultato.appendChild(testo);  
         
         bottone.textContent='Ricomincia il quiz';
         risultato.appendChild(bottone);  
         bottone.addEventListener('click',ripristina);    //aggiungiamo l'evento qui dentro perche se lo metto fuori ancora button non è creato è da errore, lo aggiungo quando gia si crea
        
    }else {
        //console.log(RESULTS_MAP[ris1[0].dataset.choiceId].title);    //lo dice non dichiarata perche non parte html, quando parte in esecuzione lo da
         header.textContent=RESULTS_MAP[ris1[0].dataset.choiceId].title;
         risultato.appendChild(header); 
         
         testo.textContent=RESULTS_MAP[ris1[0].dataset.choiceId].contents;
         risultato.appendChild(testo);
         
         bottone.textContent='Ricomincia il quiz';
         risultato.appendChild(bottone);
         bottone.addEventListener('click',ripristina);
         
    }
    
    
    for (const box of ListaPrima) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
        box.removeEventListener('click',selezionato1);  
  
     }
     
     for (const box of ListaSeconda) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
       box.removeEventListener('click',selezionato2);  
     }
     
     for (const box of ListaTerza) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
        box.removeEventListener('click',selezionato3);  
    }
    
    

}
 


/*
//-------------IMPORTANTE SERVE PER PRENDERE INDICE GIUSTO E STAMPARE TUTTO BENE-------------------------

//function fine(){
    
    //console.log(ris1[0].dataset.choiceId);    
    //dato che ris1 è un array (da vedere nel sito html con f12) mettiamo l'indice 0 perche la soluzione è in prima posizione, lo vediamo come array perche mettiamo un div dentro
    const risultato = document.querySelector('#Result');
    const header = document.createElement('h1');
    if (ris2[0].dataset.choiceId===ris3[0].dataset.choiceId){
        //document.write('L' +  );   
        
    }else {
        console.log(RESULTS_MAP[ris1[0].dataset.choiceId]);    //lo dice non dichiarata perche non parte html, quando parte in esecuzione lo da
        //header.textContent=RESULTS_MAP['blep'];
    }
    //risultato.appendChild(header);
    
    for (const box of ListaPrima) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
        box.removeEventListener('click',selezionato1);  
  
     }
     
     for (const box of ListaSeconda) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
       box.removeEventListener('click',selezionato2);  
     }
     
     for (const box of ListaTerza) {        //per aggiungere dentro lista1 tutti gli elementi selezionati in precedenza
        box.removeEventListener('click',selezionato3);  
    }

}
  */
