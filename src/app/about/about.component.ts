import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isVisionActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleVisionAndMission() {
    this.isVisionActive = !this.isVisionActive;
  }
}
