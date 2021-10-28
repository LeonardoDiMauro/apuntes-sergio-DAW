/* Crear  clase llamada baraja de cartas. Cada carta tendrá un palo Oros, Espadas, Bastos y Copas y un valor del 1 al 10 y la jocker, reina y rey valdrá 11. la baraja americana 
Queremos que se pueda Barajar esta baraja y nos aparezca en un orden aleatorio.
Y extraer una carta de la baraja */

class Carta {
    palo='C'
    numero=1
    constructor(palo, numero){
        this.palo   = palo;
        this.numero = numero;
    }

    devolverCarta(){
        return this;
    }
}

class BarajaCartas{
    barajaCarta = [];//Array Cartas
    
    crearBaraja() {  
        const tipos = ['C', 'D','H','S'];
        const numeros = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
        
        for (let tipo of tipos){
            for( let numero of numeros ){
                this.barajaCarta.push( new Carta(tipo, numero) );
            }
        }
    }
    
    mostrarBaraja (){
        return this.barajaCarta;
    }
    barajarCarta(){
        this.barajaCarta = _.shuffle(this.barajaCarta);
        return this.barajaCarta;
    }
    sacarCarta() {
        let carta = this.barajaCarta.pop();
        return carta;
    }

}

//carta = new Carta('J','2');
//console.log( carta.devolverCarta());
//console.log(carta);
baraja = new BarajaCartas();
baraja.crearBaraja();
console.log("Baraja de cartas creada");
console.log(baraja.mostrarBaraja());
baraja.barajarCarta();
console.log("Barajando de cartas ...... ");
console.log(baraja.mostrarBaraja());
console.log("Extrayendo una carta de la baraja");
console.log(baraja.sacarCarta());
console.log("Me quedan en el mazo de cartas");
console.log(baraja.mostrarBaraja());