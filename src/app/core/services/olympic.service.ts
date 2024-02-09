import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, concatMap, map, retry, switchMap, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[]>([]);
  private olympics: Olympic[]=[];

  
  private notificationSubject = new BehaviorSubject<string>('Data Loading...');
  notification$ = this.notificationSubject.asObservable();

  constructor(private http: HttpClient) {
  
  }

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => {
        this.olympics = (value);
        this.olympics$.next(value);
      }),
      catchError((error, caught) => {
        // TODO: improve error handling
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next([]);
        this.olympics$.error(error)
        this.notificationSubject.next("Data error: please wait and reload");
        // return caught;
        return [];
        
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }


  getOneOlympic(id: number): Observable<Olympic | undefined >{
    // Return Undefined if id = NaN
    if(!id){
      this.notificationSubject.next('No corresponding data.')
      return of(undefined);
    } else {
      const foundOlympic = this.olympics.find(olympic => olympic.id === id)
      if(!foundOlympic){
        this.notificationSubject.next('No corresponding data.') // if no data found in olympics
      } 

      return this.getOlympics().pipe(
        map(olympics => olympics.find(olympic => olympic.id === id))
      );
    }
    

   }
 
}
