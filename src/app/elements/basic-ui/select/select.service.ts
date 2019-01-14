import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { Location } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
@Injectable({
  providedIn: 'root'
})
export class SelectService {
 
  //更新客户信息
  updateCustomerInfo(bianhao:any): Observable<any[]> {
    let httpParams = new HttpParams()
    httpParams = httpParams
      .set("u", "1"+Math.round(Math.random()*10000000000))
      .set("p", Math.round(Math.random()*100000000000000)+"")
      .set("bianhao",bianhao)
    return this.http.post<any>("http://www.chiji.flysky.world/index.php/index/chiji.html", httpParams, httpOptions).pipe(
      catchError(this.handleError<any>('updateCustomerInfo'))
    );
  }

  constructor(public location: Location,
    private http: HttpClient,) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
