import { Component, Input } from '@angular/core';
import { Certif } from 'src/app/Models/certif';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  @Input() certif_list:Certif={imgurl:"",link:"",title:""};
}
