import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Certif } from 'src/app/Models/certif';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certificats:Certif[]=[
    {imgurl:"assets/certificate/facebook.jpg",link:"",title:"facebook Hacker cup"},
    {imgurl:"assets/certificate/girls.jpg",link:"",title:"Girls ACPC 2022"},
    {imgurl:"assets/certificate/girls.jpg",link:"",title:"Girls ACPC 2022"},
    {imgurl:"assets/certificate/girls.jpg",link:"",title:"Girls ACPC 2022"}
  ]
  
  
  
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const myDiv = document.getElementById("certificate");
    const height = myDiv?.offsetHeight;

// Log the width and height to the console

    const boxPosition = document.querySelector('#certificate')?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    //console.log("about " ,boxPosition , ", " ,scrollPosition);

    if (boxPosition!= undefined && height!=undefined && boxPosition <= 350.0 && boxPosition >= -height) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  }
}
