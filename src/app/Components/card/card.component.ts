import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/Models/card-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
 @Input() Card:CardData={};
}
