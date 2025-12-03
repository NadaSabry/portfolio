import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Certif } from 'src/app/Models/certif';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {

  // Cut the image : 1056 x 816 pixel
  // can use this website to cut the photo https://www.iloveimg.com/resize-image#resize-options,pixels
  certificats:Certif[]=[
    {imgurl:"assets/certificate/\ITI Certification3.jpg",link:"https://drive.google.com/file/d/1zAsWPDoRLBReERk0Xngyprtc__WBO0OC/view?usp=sharing",title:"ITI FrontEnd Angular"},
    {imgurl:"assets/certificate/Sparks_Complete.png",link:"https://drive.google.com/file/d/18spLVrqexHXksm0AHRo7hpxicLXwUpiI/view?usp=sharing",title:"Internship in web developement"},
    {imgurl:"assets/certificate/facebook.jpg",link:"https://drive.google.com/file/d/14WOpmCQ_ZCIXaZ9vlyLvzODJFIV9XSJV/view?usp=sharing",title:"facebook Hacker cup"},
    {imgurl:"assets/certificate/girls.jpg",link:"https://drive.google.com/file/d/1M43vtkFvnwFM_pMyPw-R3zkZzHQ-PdRD/view?usp=sharing",title:"Girls ACPC 2022 with Rank 52"},
    {imgurl:"assets/certificate/local.jpg",link:"https://drive.google.com/file/d/1WbYTu-Fo0fGIwbCdFJVGXLrr1sonCVjQ/view?usp=sharing",title:"ACPC 2020"},
    {imgurl:"assets/certificate/devfest_Hackathon.jpg",link:"https://drive.google.com/file/d/18N7_Qg7uMFqWAwWmIrdcU63_sXA9_CPS/view?usp=sharing",title:"devfest"},
    {imgurl:"assets/certificate/DB.jpg",link:"https://drive.google.com/file/d/1_hDWrJjdq2zFnSkmxHGqZXxJEJU4DrOb/view?usp=sharing",title:"Course Database"},
  ]
  
  
  
  isVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const myDiv = document.getElementById("certification");
    const height = myDiv?.offsetHeight;

// Log the width and height to the console

    const boxPosition = document.querySelector('#certification')?.getBoundingClientRect().top;
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
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  }
}
