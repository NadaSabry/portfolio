import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardData } from 'src/app/Models/card-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isVisible = false;
  // Add image with size = 977 x 656 pixel
  // can use this website to cut the photo https://www.iloveimg.com/resize-image#resize-options,pixels

  // add projects in the alahly momkn
  // 1- L1: project get logs for each transaction from database and from severs ,and work on some sql query to get reports
  // 2- Configration: work on story procedure to do migration configuration of the service from UAT to the Production on one click button 
  // - Admin dashboard etisalat voucher , points
  // 3-Software engineer: - Admin Dashboard , -ACL anti-corruption layer on Mapping layer using Ocelot

  Card:CardData[]=[
  {
    description:"using Angular framework and .Net Core Web Api with plugin fawry pay",githubUrl:"https://github.com/NadaSabry/E-Commerce",
    imgUrl:"assets/project/kedaPay.jpeg",liveUrl:"https://interactive-card-details-ecru.vercel.app/",
    title:"Ecommerce-Sweet",linkedinUrl:"https://www.linkedin.com/posts/nada-sabry-in_ecommerce-kedapay-fawrypay-activity-7356025472205389827-WWvQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoe_b4BnMStAZDj-zpv9eG87XamiQe3WSk"
  },
  {
    description:"using angular and bootstrap framework",githubUrl:"https://github.com/NadaSabry/portfolio",
    imgUrl:"assets/project/myProtfolio3.jpg",liveUrl:"https://portfolio-three-black-45.vercel.app",
    title:"Portfolio"
  },
  {
    description:"My graduation project using Angular framework with Rest api",githubUrl:"https://github.com/NadaSabry/ZoneGuardFE",
    imgUrl:"assets/project/GP.jpg",liveUrl:"https://zone-guard-fe-wexa.vercel.app/",
    title:"Security Compound",youtubeUrl:"https://youtu.be/WwK49AY5Gmo",linkedinUrl:"https://www.linkedin.com/posts/nada-sabry-in_graduation2023-gp-security-activity-7076848451757424641-fh5-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoe_b4BnMStAZDj-zpv9eG87XamiQe3WSk"
  },
  {
    description:"using HTML, CSS, TypeScript and Angular framework",githubUrl:"https://github.com/NadaSabry/Calculator",
    imgUrl:"assets/project/3_Calculator.jpg",liveUrl:"https://calculator-six-theta-35.vercel.app",
    title:"Calculator",youtubeUrl:""
  },
  {
    description:"using HTML, CSS and bootstrap framework with .Net core for backend",githubUrl:"https://github.com/NadaSabry/Rosa_Bella",
    imgUrl:"assets/project/Rosa_Bellaa.jpg",liveUrl:"",
    title:"E-commerce",youtubeUrl:"https://youtu.be/UnwtZ_WfJpY"
  },
  {
    description:"using ASP .Net core web API, Angular framework",githubUrl:"https://github.com/NadaSabry/RestaueantAPI",
    imgUrl:"assets/project/RestaurantAdmintoolApi3.jpeg",liveUrl:"",
    title:"Restaurant web API",youtubeUrl:"https://www.youtube.com/watch?v=UTpe7WdwQzk"
  },
  {
    description:"using Angular and bootstrap framework",githubUrl:"https://github.com/NadaSabry/loopstudiosLanding",
    imgUrl:"assets/project/loopstudios.jpg",liveUrl:"https://loopstudios-landing-tau.vercel.app/",
    title:"loopstudios",youtubeUrl:"https://youtu.be/UNFmNzE-K28"
  },
  {
    description:"using Angular framework with Rest api",githubUrl:"https://github.com/NadaSabry/REST-Countries-API",
    imgUrl:"assets/project/rest-api.jpg",liveUrl:"https://nadasabry.github.io/REST-Countries-API/",
    title:"Rest-counteries-api",youtubeUrl:"https://youtu.be/PkQy_GngQ_8"
  },
  {
    description:"using HTML, CSS and bootstrap framework with Angular framework",githubUrl:"https://github.com/NadaSabry/sunnyside",
    imgUrl:"assets/project/sunnyside.jpg",liveUrl:"https://sunnyside-rho-six.vercel.app/",
    title:"sunnyside",youtubeUrl:""
  },
  {
    description:"using HTML, CSS and bootstrap framework",githubUrl:"https://github.com/NadaSabry/Food",
    imgUrl:"assets/project/php.jpg",liveUrl:"",
    title:"Food Website",youtubeUrl:"https://youtu.be/vEhMOEQ3oQ4"
  }
  
  // add image with size 977x656
];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const myDiv = document.getElementById("projectsv2");
    const height = myDiv?.offsetHeight;

    const boxPosition = document.querySelector('#projectsv2')?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight + window.pageYOffset;
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
