import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shell-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  inputData : string = ""
  ngOnInit(): void {
    this.inputData = localStorage.getItem('value') || ''    
  }

  handleInput2(event: Event){
    const value = (event.target as HTMLInputElement)?.value
    if(value){
      console.log('value', value)
      localStorage.setItem('value', value)
    }
  }
}
