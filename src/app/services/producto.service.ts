import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  // Datos simulados en memoria, igual que en el PDF de la práctica.
  private productos: Producto[] = [
    { id: 1, nombre: 'Laptop Gamer', precio: 1200, categoria: 'Tecnología', disponible: true },
    { id: 2, nombre: 'Teclado Mecánico', precio: 85, categoria: 'Accesorios', disponible: true },
    { id: 3, nombre: 'Monitor 4K', precio: 350, categoria: 'Tecnología', disponible: false }
  ];

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]> {
    return of([...this.productos]);
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    const nuevo: Producto = { ...producto, id: Math.max(0, ...this.productos.map(p => p.id ?? 0)) + 1 };
    this.productos.push(nuevo);
    return of(nuevo);
  }

  eliminarProducto(id: number): Observable<boolean> {
    const longitudAnterior = this.productos.length;
    this.productos = this.productos.filter(p => p.id !== id);
    return of(this.productos.length !== longitudAnterior);
  }
}
