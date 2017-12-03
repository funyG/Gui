import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map"
import {Http, Response } from "@angular/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  results: string[];
  res = this.results;
  agent: string;
  private url = 'http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/WebService/GetFeeds';

  constructor (private http: HttpClient ) {

  }

  ngOnInit(): void {
    interface ItemsResponse {
      results: string[];

    }
  }
  // getData() {
  //   console.log("S");
  //   return this.http.get(this.url)
  //     .map((res: Response) => res.json())
  //
  //   }

}


