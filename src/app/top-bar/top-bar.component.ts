import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  route: any;
  constructor(private router: Router) {
    this.route = this.router;
  }

  ngOnInit(): void {
  }

}
