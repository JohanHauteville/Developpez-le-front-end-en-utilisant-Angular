import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[]>([]);
  // private olympics$ = new BehaviorSubject<any>(undefined);
  private olympics: Olympic[]=[];

  constructor(private http: HttpClient) {
  
  }

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics = (value)),
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next([]);
        return caught;
      })
      
    );
  }

  getOlympics() {
    // return this.olympics$.asObservable();
    return this.olympics$.asObservable();
  }
  getOneOlympic(id: number): Observable<Olympic | undefined >{
    // this.loadInitialData();
    // console.log(this.olympics);
    
    // console.log(this.olympics$.value.filter((data) => data.id === id));
    
    // return <Olympic>this.olympics$.value.find((data) => data.id === id);
    return this.getOlympics().pipe(
      map(olympics => olympics.find(olympic => olympic.id === id))
    );
  }
}
