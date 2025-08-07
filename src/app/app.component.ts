import { Component, OnInit } from '@angular/core';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth-service.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DentalDanaClinick';
   isLoggedIn :boolean=false;
  /**
   *
   */
  constructor(private auth: AuthService, private router: Router) { 
    
    
  }
  ngOnInit(): void {
    const roleFromToken = this.auth.getDecodedUserRole();
  this.auth.updateUserRole(roleFromToken ?? undefined);    // Restore role from token on App start
  const token = localStorage.getItem('token');
  if (token) {
    const decoded: any = jwtDecode(token);
    const now = Date.now();
    if (decoded.exp * 1000 > now) {
      this.auth.startLogoutTimer(decoded.exp * 1000);
    } else {
      this.auth.logout();
    }
  }
      if (this.auth.isTokenExpired()) {
      alert('Session expired. You will be logged out.');
      this.auth.logout();  // clear localStorage or token
      this.router.navigate(['/login']);  // redirect to login
    }
    this.isLoggedIn=  this.auth.isLoggedIn()
    if(this.isLoggedIn)
    {
      this. isLoggedIn;
    }
  }
 
}
