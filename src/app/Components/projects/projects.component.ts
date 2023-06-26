import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const myDiv = document.getElementById("projects");
    const height = myDiv?.offsetHeight;

    const boxPosition = document.querySelector('#projects')?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    //console.log("projects " ,projectsPosition , ", " ,scrollPosition);

    //if (projectsPosition != undefined && scrollPosition > projectsPosition) {
    if (boxPosition!= undefined && height!=undefined && boxPosition <= 350.0 && boxPosition >= -height) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
