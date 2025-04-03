import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'shell';
  inputData : string = ''
  ngOnInit(): void {
    localStorage.setItem('test', 'asadw')
    
  }

  // handleInput(event: Event){
  //   const value = (event.target as HTMLInputElement)?.value
  //   if(value){
  //     console.log('value', value)
  //     localStorage.setItem('value', value)
  //   }
  // }
}
