import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForumApiService } from 'src/app/forum-api.service';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-show-topics',
  templateUrl: './show-topics.component.html',
  styleUrls: ['./show-topics.component.css']
})


export class ShowTopicsComponent implements OnInit {

  topicList: Observable<any[]>;

  topicId: number | undefined;;
  message: string = '';
  authorsMap: Map<number, string> = new Map()
  userList: any=[];
  topic: any;
  titleName: string='';
  activateAddEditTopicComponent: boolean;
  isRegist: boolean;

  private subscription: Subscription;

  constructor(
    private service: ForumApiService,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(
      switchMap(params => params.getAll('topicId'))
    )
    .subscribe(data=> this.topicId = +data);
    this.topicList = this.service.getTopicList();
    this.showAuthorMap();
  }

  modalAdd() {
    this.topic = {
      id: 0,
      name: null,
      created: null,
      userId: null,
      messages: []
    }
    this.titleName = 'Add Topic';
    this.activateAddEditTopicComponent = true;
    this.isRegist = true;
  }

  modalClose(){
    this.activateAddEditTopicComponent=false;
    this.topicList = this.service.getTopicList();
  }

  showAuthorMap() {
    this.service.getAllUsers().subscribe(data => {
      this.userList = data;

      for(let i = 0; i < this.userList.length; i++)
      {
        this.authorsMap.set(this.userList[i].id, this.userList[i].firstName);
      }
    })
  }



}
