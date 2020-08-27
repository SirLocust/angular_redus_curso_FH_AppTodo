export class Todo {
    private id:number;
    private texto: String;
    private completado:boolean
    
    constructor(texto: String){
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1) ;
        this.completado = false;
        this.id = Math.random();
    }


}