import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

var request = new XMLHttpRequest();

request.open('GET', 'https://www.eventbriteapi.com/v3/events/search/?token=4XT7DP5NU43GLYW4P53P');

request.setRequestHeader('Authorization', 'Bearer 4XT7DP5NU43GLYW4P53P');
request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
    
  }
};

request.send();