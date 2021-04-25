import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthServiceService {

  //Se inicializa el modulo http en el servicio
  constructor(private http: Http) { }

  // Función de servicio de usuario en firebase
  obtenerDatosUsuario() {
    return this.http.get("https://angular-login-682a8.firebaseio.com/.json")
      .map((res: Response) => res.json())  //Convertir la respuesta a formato JSON
  }

  // Función de servicio de todos los productos en firebase
  obtenerProductos() {
    return this.http.get("https://angular-login-682a8.firebaseio.com/products.json")
      .map((res: Response) => res.json())  //Convertir la respuesta a formato JSON
  }

  actualizarProductos3() {
    return this.http.put(`https://angular-login-682a8.firebaseio.com/products/${0}.json`, {})
  }

  actualizarProductos(nombre) {

    console.log(nombre);
    //return this.http.put('https://tienda-online-efnextu.firebaseio.com/producto1.json', nombre);
    return this.http.put(`https://tienda-online-efnextu.firebaseio.com/0.json`, JSON.stringify({
      imagen: "./carpeta/imagen.jpg",
      nombre: "usuario1",
      precio: 50,
      stock: 40,
      tipo: "producto"
    }), {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).map(res => res.json());

  }

}
