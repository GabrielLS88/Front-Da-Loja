import { Injectable } from '@angular/core';
import { Estado } from '../model/estado';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private readonly API = 'api/estado/';

  constructor(private http: HttpClient) {}

   findAll() {
    return this.http.get<Estado[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(estado => console.log(estado))
    );
  }
  save(record: Estado){
   return this.http.post<Estado>(this.API, record);
  }
}
