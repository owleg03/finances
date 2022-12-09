import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  url = "Expenses";

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend server returned ${error.status}, body: `, error.error);
    }
    return throwError(() => new Error('Unknown error occurred.'));
  }
  
  public getExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(`${environment.apiUrl}/${this.url}`)
    .pipe(
      catchError(this.handleError)
    );   
  }

  public putCategory(id: number, category: Category): Observable<Expense> {
    return this.httpClient.put<Expense>(`${environment.apiUrl}/${this.url}/${id}/${category}`, category)
    .pipe(
      catchError(this.handleError)
    ); 
  }
}
