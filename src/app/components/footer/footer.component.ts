import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  whatsapp = 'https://wa.me/5521972251252';
  linkedin = 'https://www.linkedin.com/in/lucas-anes/';
  instagram = 'https://www.instagram.com/anes.lucass/';
  github = 'https://github.com/skyluke11';
}
