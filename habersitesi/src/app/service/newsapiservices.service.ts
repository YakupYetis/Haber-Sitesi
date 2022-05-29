import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //Haberler
newsApiUrl = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=2ed3dada39bc436fb3def7a6369ce119"

topHeading():Observable<any>
{
  return this._http.get(this.newsApiUrl);
}
  
}
