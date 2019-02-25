import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navprincipale',
  templateUrl: './navprincipale.component.html',
  styleUrls: ['./navprincipale.component.css']
})




export class NavprincipaleComponent {


  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }
  username: string;
  password: string;


  ngOnInit() {
  }
  login() : void {
    if(this.username == 'jdoe' && this.password == 'jdoe'){
    this.router.navigate(["login"]);
    }else {
      alert("Credenziali non valide");
    }
  }




  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
    }
