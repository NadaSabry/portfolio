import { Component, HostListener } from '@angular/core';
import { CardData } from 'src/app/Models/card-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isVisible = false;
  Card:CardData[]=[
  {
    description:"using angular and bootstrap framework",githubUrl:"https://github.com/NadaSabry/portfolio",
    imgUrl:"assets/project/_portfolio.jpg",liveUrl:"https://portfolio-three-black-45.vercel.app",
    title:"Portfolio",youtubeUrl:""
  },
  {
    description:"using Angular framework with Rest api",githubUrl:"https://github.com/NadaSabry/ZoneGuardFE",
    imgUrl:"assets/project/GP.jpg",liveUrl:"https://zone-guard-fe-wexa.vercel.app/",
    title:"Security Compound",youtubeUrl:"https://youtu.be/WwK49AY5Gmo"
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
    description:"using HTML, CSS and bootstrap framework",githubUrl:"https://github.com/NadaSabry/Food",
    imgUrl:"assets/project/php.jpg",liveUrl:"",
    title:"Food Website",youtubeUrl:"https://youtu.be/vEhMOEQ3oQ4"
  },
  {
    description:"using HTML, CSS and bootstrap framework with .Net core for backend",githubUrl:"https://github.com/NadaSabry/Rosa_Bella",
    imgUrl:"assets/project/Rosa_Bellaa.jpg",liveUrl:"",
    title:"E-commerce",youtubeUrl:"https://youtu.be/UnwtZ_WfJpY"
  },
  {
    description:"using HTML, CSS and bootstrap framework with Angular framework",githubUrl:"https://github.com/NadaSabry/sunnyside",
    imgUrl:"assets/project/sunnyside.jpg",liveUrl:"https://sunnyside-rho-six.vercel.app/",
    title:"sunnyside",youtubeUrl:""
  }
  // add image with size 977x656
];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const myDiv = document.getElementById("projects");
    const height = myDiv?.offsetHeight;

    const boxPosition = document.querySelector('#projects')?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    if (boxPosition!= undefined && height!=undefined && boxPosition <= 350.0 && boxPosition >= -height) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
}
