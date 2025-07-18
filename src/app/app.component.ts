import { Component, OnInit } from '@angular/core';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DentalDanaClinick';
  /**
   *
   */
  constructor(public auth: AuthService) {
    
    
  }
  ngOnInit(): void {
   
  }
}
