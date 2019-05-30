import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todos: Array<string> = [
    'Run',
    'Read',
    'Sleep',
    'Play'
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      const title = param.title;
      const description = param.description;
      this.todos.push(title);
      console.log(title, description);
    });
  }

  ionViewDidEnter() {
    console.log('todo page will enter');
  }

}
