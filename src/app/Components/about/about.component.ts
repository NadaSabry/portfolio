import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const boxPosition = document.querySelector('#about')?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    console.log("about " ,boxPosition , ", " ,scrollPosition);

    if (boxPosition!= undefined &&  boxPosition <= 350.0 && boxPosition >= -550.0) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
