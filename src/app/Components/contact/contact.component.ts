import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const boxPosition = document.querySelector('#contact')?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    //console.log("contact " ,boxPosition , ", " ,scrollPosition);

    //if (boxPosition!= undefined && scrollPosition > boxPosition) {
    if (boxPosition!= undefined &&  boxPosition <= 350.0 && boxPosition >= -550.0) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
