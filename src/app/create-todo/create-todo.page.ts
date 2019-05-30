import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.page.html',
  styleUrls: ['./create-todo.page.scss'],
})
export class CreateTodoPage implements OnInit {
  todo: string;
  fg: FormGroup;
  // title: string;
  // description: string;
  constructor(private navController: NavController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      title: '',
      description: ''
    });
  }

  onBack() {
    this.navController.navigateBack(['/todo']);
  }

  onCreateTodo() {
    // console.log(this.fg.value);
    // console.log(this.todo);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        title: this.fg.get('title').value,
        description: this.fg.get('description').value
      }
    };
    this.navController.navigateBack('/todo', navigationExtras);
  }

}
