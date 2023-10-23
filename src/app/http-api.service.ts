import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpClient: HttpClient) { }

  postContactInformation(contactForm:any) {
    //let body = {
    //  "entry.477523759": contactForm.name,
    //  "entry.1022473065": contactForm.message,
    //  "entry.1661666372": contactForm.email,
    //  "entry.470702811": contactForm.contact,
    //  "entry.1872792458": contactForm.subject
    //};
    let body = new FormData();
    body.append('entry.477523759', contactForm.name);
    body.append('entry.1022473065', contactForm.message);
    body.append('entry.1661666372', contactForm.email);
    body.append('entry.470702811', contactForm.contact);

    body.append('entry.1872792458', contactForm.subject);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpClient.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeclvsarqDZlrXzb1ON8SVh-2EX0MirP3VFQu2lSccorKsnww/formResponse", body);
  }
  getProducts() {
    return this.httpClient.get<any[]>('/assets/products.json');
  }
}
