import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Power Monitor';
  solisData: any;
  solarIcon = faSolarPanel;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 5000); // check for changes every 5 seconds
  }

  getData() {
    this.http.get('../assets/dump.json')
      .subscribe(data => {
        this.solisData = data;
        console.log('Data', this.solisData);
      });
  }

  getProgressBarColor(value: number): string {
    if (value < 20) {
      return 'rgb(198, 0, 0)'; //'red-progress-bar';
    } else if (value < 50) {
      return 'rgb(249, 216, 0)'; //yellow-progress-bar';
    } else {
      return 'rgb(0, 190, 0)'; ; //'green-progress-bar';
    }
  }

  batteryDir(value: number): string {
    if (value > 0) {
      return '▼';
    } else if (value < 0) {
      return '▲';
    } else {
      return '│';
    }
    }

    solarDir(value: number): string {
      if (value > 0) {
        return '▼';
      }
      return '│';
    }

    powerDir(value: number): string {
      if (value > 0) {
        return '▲';
      } else if (value < 0) {
        return '▼';
      } else {
        return '│';
      }
    }

    abs(value: number): number {
      return Math.abs(value);
    }
  }






