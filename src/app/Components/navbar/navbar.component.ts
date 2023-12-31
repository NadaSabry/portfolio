import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  activenow: string = "rgb(30,154,161)";
  active: string[] = [this.activenow, '', '', '', ''];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const homeSection = document.querySelector('#home');
    const aboutSection = document.querySelector('#about');
    const projectsSection = document.querySelector('#projects');
    const certificationSection = document.querySelector('#certification');
    const contactSection = document.querySelector('#contact');
    
    const homeLink = document.querySelector('.navbar-nav .nav-link:nth-child(2)');
    //console.log(homeSection," , " ,homeLink )
    
    if (this.isElementInViewport(homeSection)) {
      this.active = [this.activenow, '', '', '', ''];
    }else if (this.isElementInViewport(aboutSection)){
      this.active = ['', this.activenow , '', '', ''];
    }else if (this.isElementInViewport(projectsSection)){
      this.active = ['', '' ,this.activenow , '', ''];
    }else if (this.isElementInViewport(certificationSection)){
      this.active = ['', '' , '', this.activenow, ''];
    }else if (this.isElementInViewport(contactSection)){
      this.active = ['', '' , '', '', this.activenow];
    }else{
      this.active = ['', '' , '', '', ''];
    }
    
  }
  isElementInViewport(el:any) {
    const rect = el.getBoundingClientRect();
    //console.log(el , "height= ",rect.height);
    //console.log(rect.top," ,, " ,rect.bottom);
    /*
    if(rect.top <= 1.0){
       console.log('true');
    }
    */
    return (
      rect.top <= 1.0 &&
      rect.bottom > 1
    );
  }

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
