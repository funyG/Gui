import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams } from "@angular/common/http";
import {Http, Response,  } from "@angular/http";
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-create.component.css'],

})

export class AgentViewComponent implements OnInit {
  title = 'agent-details';
  id: string;
  Agent: string[];
  results: string[];
  private url = 'http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/Agents/Agent/';
  private AddAgentUrl = 'http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/Agents/addAgent/';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  public createUser(): void {
    console.log('user');
    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    const body = {
      'firstname': 's',
      'lastname': 's',
      'proffesion': 's',
      'hours': 's',
      'group_id': 's',
      'id': 's,'
    };
    this.http.post(this.AddAgentUrl, body, {
      params: new HttpParams()
        .set('firstname', 's')
        .set('lastname', 's')
        .set('proffesion', 's')
        .set('hours', '0')
        .set('group_id', '1')
        .set('id', '4')
    })
      .subscribe( data => {
    });
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id'];
      this.http.get<AgentResponse>(this.url + userId).subscribe(data => {
        this.Agent = Object.keys(data).map(key => data[key]);
        for (let i = 0; i < this.Agent.length; i++) {
        }
        console.log('from compon' + this.Agent);
      });
    });
    interface AgentResponse {
      results: string[];
    }
  }



}




