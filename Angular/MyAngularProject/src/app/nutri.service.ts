import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from './model/Track';

@Injectable({
  providedIn: 'root'
})
export class NutriService {
  url: string;
  trackArr: Track[];
  track: Track;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3004/nutrition";
    this.track = new Track();
    this.trackArr = [];
  }

  insertNutrition(track: Track) {
    this.http.post<Track>(this.url, track).subscribe();
    return "Nutrition Details Added !!";
  }

  updateNutrition(track: Track) {
    this.http.put<Track>(this.url + "/" + track.id, track).subscribe();
    return "Nutrition Details Updated !! ";
  }

  deleteNutrition(id: number) {
    this.http.delete<Track>(this.url + "/" + id).subscribe();
    return "Nutrition Details Deleted !!";
  }

  findNutrition(id: number) {
    this.http.get<Track>(this.url + "/" + id).subscribe(data => this.track = data);
    return this.track;
  }

  findAllNutrition() {
    this.http.get<Track[]>(this.url).subscribe(data => this.trackArr = data);
    return this.trackArr;
  }
}
