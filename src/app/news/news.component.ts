import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data;
    console.log(this.data);
  }

}
