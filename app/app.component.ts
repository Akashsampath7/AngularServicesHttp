import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  demo:any;

  constructor(private service:DemoService) {}

  ngOnInit()
  {
    this.service.getPosts()
        .subscribe(response => {
          this.demo = response;
        });
      }
}
