
const expresioValidanumero =  /^[a-zA-Z][a-zA-Z0-9]*$/


//calse diccionario
//esta clase contiene las palabras clave del lenguaje 
//junto con sus signaciones, ciclos, funciones y operadores artimeticos

class Diccionario{
    static declaraciones = ["entero","cadena","carac","binario", "decimal","nulo"];
    static operacionAsignacion = ["="];
    static operadoresArit = ["+","-","*","/","%","**","++","--"];
    static ciclos = ["para", "mientras", "finC"]
    static funciones = ["fun"];
    static separador = [";"]
    static logica = ["<",">","<=",">=","==", "OR", "AND", "NOT"]
 }

//clase token 
//esta clase crealos objetos de tipo token para ser taratados por el programa
class Token{

    lexema = "";
    tipo ="";

    constructor(lexema, tipo){
        this.lexema = lexema;
        this.tipo = tipo;
    }

    get lexema(){
        return this.lexema;
    }

    set lexema(cadena){
        this.lexema = this.lexema;
    }

    get tipo(){
        return this.tipo;
    }

    set tipo(cadena){
        this.tipo = cadena;
    }

    //metodo estatico usado para validar el lexema del token para saber a que categoria 
    //corresponde

    static buscarTipoToken(palabra){

        if(Diccionario.declaraciones.includes(palabra))return "Declaracion";
        else{
            if(Diccionario.operacionAsignacion.includes(palabra))return "Asignacion";
            else{
                if(Diccionario.operadoresArit.includes(palabra))return "Operacion Aritmetica";
                else{
                    if(Diccionario.funciones.includes(palabra))return "Funcion";
                    else{
                        if(Diccionario.ciclos.includes(palabra))return "Ciclo inicio-fin"
                        else{
                            if(Diccionario.separador.includes(palabra))return "Separador de linea"
                            else{
                                if(Diccionario.logica.includes(palabra))return "Operador Logico"
                                else{
                                    if(!isNaN(palabra)){
                                        return "valor numerico"
                                     }else{
                                        if(validarPalabra(palabra)) return "Nombre variable"
                                        else return "decalracion inadmisible"
                                     }
                                }
                              
                            }
                        }
                    }
                }
            }
        }

    }
 }


 //obteniendo elementos del HTML

const input = document.getElementById("input");
const button = document.getElementById("buttonV")


// esta funcion obtiene el valor del input del HTML
//para posteriormente tarara los datos 

function comprobarDeclaracion() {


    const divResult = document.getElementById("divResult");
    const lista = document.createElement("UL")
    const revisarDiv = divResult.querySelector("UL")

    //reset del div
    if(revisarDiv)divResult.removeChild(revisarDiv);

    value_input = input.value ;
    console.log(value_input);

    //creando vector de palabras extraido del input "split(): esta funcion separa una cadena"
    //dependiendo del parametro que le insertemos "filter()": esta funcion filtra el vextor resultante
    //para que no admita espacion en blanco ademas de realizar un nuevo filtro 
    //que elimina elementos repetidos
    const palabras = value_input.split(' ').filter((valor)=>{
        return valor !== "";
    }).filter(function (
        elemento,
        indice,
        arreglo
      ) {
        return arreglo.indexOf(elemento) === indice;
      });

    console.log(palabras);
    
    const tokens = [];


    for(palabra of palabras){

        //creando un item de la lista que va dentro del DIV
        const itemList = document.createElement("LI");
        //creando texto que va dentro de la lista
        let itemText;

        //creando objeto token
        let token = new Token("","");

        //insertando datos dentro del token
        token.lexema = palabra;
        token.tipo = Token.buscarTipoToken(palabra);

        //texto del itemText
        const tokenString = "[LEXEMA: "+ token.lexema + "] ---- [TIPO: "+ token.tipo +"]";

        //insertando texto dentro de lista
        itemText = document.createTextNode(tokenString);
        itemList.appendChild(itemText);

        console.log(token);

        //guardando tokens dentro de un vector
        tokens.push(token);

        //insertando el item de la lista en la lista
        lista.appendChild(itemList)
        //insertando lista dentro del div
        divResult.appendChild(lista)

        
    }

    console.log(tokens)


}


//valida que las variables cumplan con la condicion de la expresion regular

function validarPalabra(palabra){
    return expresioValidanumero.test(palabra);
}

const boton= document.getElementById("buttonV");
boton.addEventListener("click",reproducirSonido);

function reproducirSonido(){

    event.preventDefault();
    const resultado = document.getElementById("input");
    const sonido = document.getElementById("miSonido");
    sonido.play();
    
}