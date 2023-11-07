import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { finalize, tap } from 'rxjs';
import ISearchableEntity from '../models/ISearchableEntity';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  isLoading = signal(false);

  search(searchTerm: string) {
    this.isLoading.set(true);
    return this.http.get<ISearchableEntity>(`http://localhost:8080/api/search?query=${searchTerm}`).pipe(
      finalize(() => this.isLoading.set(false)),
      tap(
        (response: any) => console.log(response),
        (error: any) => console.log(error)
      )
    );
  }
}
