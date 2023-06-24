import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  activenow: string = "rgb(30,154,161)";
  active: string[] = [this.activenow, '', '', ''];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['']);
  }
  
  standup(index: number) {
    for (let i = 0; i < this.active.length; i++) {
      if (i == index) {
        this.active[i] = this.activenow;
      }
      else {
        this.active[i] = '';
      }
    }
  }
}
