import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  /**
   *
   */
  constructor(private router:Router) {
  }
    Onappoint(){
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
    
  }
    
}

