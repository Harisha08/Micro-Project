// src/app/app.component.ts
import { Component } from '@angular/core';
import { Track } from './model/Track';
import { NutriService } from './nutri.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularProject';
  track: Track;
  result: string;
  trackArr: Track[];
  flag: boolean;

  constructor(private service: NutriService) {
    this.track = new Track();
    this.result = "";
    this.trackArr = [];
    this.flag = false;
  }

  insertNutrition() {
    this.result = this.service.insertNutrition(this.track);
  }

  updateNutrition() {
    this.result = this.service.updateNutrition(this.track);
  }

  deleteNutrition() {
    this.result = this.service.deleteNutrition(this.track.id!);
  }

  findNutrition() {
    this.track = this.service.findNutrition(this.track.id!);
    this.result = `${this.track.id} ${this.track.date} ${this.track.mealType} ${this.track.foodItem} ${this.track.portionSize} ${this.track.calories} ${this.track.carbs} ${this.track.protein} ${this.track.fat}`;
  }

  findAllNutrition() {
    this.trackArr = this.service.findAllNutrition();
    this.flag = true;
  }
}
