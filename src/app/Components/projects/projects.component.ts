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
    imgUrl:"assets/project/img.jpg",liveUrl:"https://portfolio-three-black-45.vercel.app",title:"Portfolio"
   ,youtubeUrl:""
  },
  {
    description:"",githubUrl:"",imgUrl:"assets/project/GP.jpg",liveUrl:"",title:"",youtubeUrl:""
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
