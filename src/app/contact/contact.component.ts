import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: any = {};
  constructor(private httpApiService: HttpApiService) { }

  ngOnInit(): void {
  }
  onContactPost() {
    this.httpApiService.postContactInformation(this.contactForm).toPromise().then((res: any) => {
      console.log(res);
    });
  }
}
