
// Ejercicio 1
var mascotasObj = {
	mascotas: ['perros','gatos','canarios','pez','serpiente'],


    eliminarMascota: function(tipoMascota){
        var posicion = this.mascotas.indexOf(tipoMascota);
        this.mascotas.splice(posicion, 1);
       return this.mascotas;
        },
    
    eliminarUltimaMascota: function(){
        this.mascotas.pop();
        return this.mascotas;
        },
    
    agregarMascota: function(nuevaMascota){
        this.mascotas.push(nuevaMascota);
        return this.mascotas;
        },

    contadorMascotas: function(){
        var contador = 0;

        this.mascotas.forEach(function(mascotaActual) {
            terminado = mascotaActual.substr(mascotaActual.length -2, 2);

            if(terminado == 'os'){
                contador++;
                //  console.log('Me gustan los ' + mascota);
            }
           
        });
        return "En el arreglo hay " + contador + " mascotas que terminan con 'os'";

    }
}
    

//Ejercicio 2


const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],

    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
    
}

const funcionTrabajador1 = function(
    {   nombre: nombre, 
        cargo: cargo,
        empresa: {datos:{nombre: empresa}},
        gustos: gustos,
        hijos: hijos = null: "No tiene hijos",

    })
    {
    return "El trabajador " + nombre + " trabaja en " + empresa + " con cargo " + cargo + " y le gusta " + gustos + " y " + hijos;

}


const funcionTrabajador2 = function(
    {   nombre: nombre, 
        cargo: cargo,
        empresa: {ubicación:{comuna: comuna}},
        empresa: {ubicación:{puesto: puesto}},
        empresa: {clientes:clientes},

    })
    {
    return "El trabajador " + nombre + " va a su trabajo en " + comuna + ", es " + cargo + ", en el puesto " + puesto + ", trabaja con " + clientes[0] + " y " + clientes[1];

}
