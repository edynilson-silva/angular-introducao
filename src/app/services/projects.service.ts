import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface GithubResponse{
  incomplete_results: boolean,
  items:  any[],
  total_count: number
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getProjects(searchText) {
    if (searchText) {
      // const url = `https://api.github.com/search/repositories?q=${this.searchText}`;
      const url = `https://api.github.com/search/repositories`;
      /* Fetch ou xhtml request - estudar */
      const params = new HttpParams().set('q', searchText);
      const headers = new HttpHeaders().set('Content-Type', 'text/html');

      // Retorna uma promisse ( se quiseremos usar o POST, apenas trocar o verbo http, e colocar de 2 parametro o objeto, params/headers ficam como 3 parametro)
      this.http.get<GithubResponse>(url, {params, headers}).subscribe(
        response => {
          this.projects.next(response['items']); // response.items; Pois criei uma interface (Ao usar Behavior Subject usar o NEXT para passar valores)
        }
      ); 
    }
  }
}
