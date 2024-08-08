import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from './model/Track';

@Injectable({
  providedIn: 'root'
})
export class NutriService {

  private apiUrl = 'http://localhost:3000/nutrition'; // Change to your API URL

  constructor(private http: HttpClient) { }

  getAllNutrition(): Observable<Track[]> {
    return this.http.get<Track[]>(this.apiUrl);
  }

  getNutritionById(id: number): Observable<Track> {
    return this.http.get<Track>(`${this.apiUrl}/${id}`);
  }

  addNutrition(track: Track): Observable<Track> {
    return this.http.post<Track>(this.apiUrl, track);
  }

  updateNutrition(track: Track): Observable<Track> {
    return this.http.put<Track>(`${this.apiUrl}/${track.id}`, track);
  }

  deleteNutrition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
