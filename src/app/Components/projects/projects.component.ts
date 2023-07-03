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
    description:"by angular framework and html,css",githubUrl:"https://github.com/NadaSabry/portfolio",
    imgUrl:"assets/project/_portfolio.jpg",liveUrl:"https://portfolio-three-black-45.vercel.app",
    title:"Portfolio",youtubeUrl:""
  },
  {
    description:"Angular Framework with Rest api",githubUrl:"https://github.com/NadaSabry/ZoneGuardFE",
    imgUrl:"assets/project/GP.jpg",liveUrl:"https://zone-guard-fe-wexa.vercel.app/",
    title:"Security Compound",youtubeUrl:"https://youtu.be/WwK49AY5Gmo"
  },
  {
    description:"by Angular framework ,html ,css, bootstrap framework",githubUrl:"https://github.com/NadaSabry/loopstudiosLanding",
    imgUrl:"assets/project/loopstudios.jpg",liveUrl:"https://loopstudios-landing-tau.vercel.app/",
    title:"loopstudios",youtubeUrl:"https://youtu.be/UNFmNzE-K28"
  },
  {
    description:"",githubUrl:"https://github.com/NadaSabry/REST-Countries-API",
    imgUrl:"assets/project/rest-api.jpg",liveUrl:"https://nadasabry.github.io/REST-Countries-API/",
    title:"Rest-counteries-api",youtubeUrl:""
  },
  {
    description:"",githubUrl:"https://github.com/NadaSabry/REST-Countries-API",
    imgUrl:"assets/project/php.jpg",liveUrl:"https://nadasabry.github.io/REST-Countries-API/",
    title:"Rest-counteries-api",youtubeUrl:""
  },
  {
    description:"",githubUrl:"https://github.com/NadaSabry/REST-Countries-API",
    imgUrl:"assets/project/Rosa_Bellaa.jpg",liveUrl:"https://nadasabry.github.io/REST-Countries-API/",
    title:"Rest-counteries-api",youtubeUrl:""
  }
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
