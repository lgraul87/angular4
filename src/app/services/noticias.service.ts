import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http:HttpClient) { }
  getNoticias(){
return new Promise<any>(resolve=>){}
('${enviroment.apiUrl})top-headlines?country=us&apiKey=
${enviroment.apiKey}

  }
}


