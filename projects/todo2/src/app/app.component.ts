import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo2-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todo2';
  localData: string = ''
  inputData: string = ''
  ngOnInit(): void {
    this.localData = localStorage.getItem('test') || ''
    this.inputData = localStorage.getItem('value') || ''
  }

  input(event: Event){
    const value = (event.target as HTMLInputElement)?.value
    if(value){
      console.log('value', value)
      localStorage.setItem('value', value)
    }
  }
}
