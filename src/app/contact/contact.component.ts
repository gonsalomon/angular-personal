import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  lkpath: string = 'https://lh3.googleusercontent.com/d/1BsProUA_RXfahd-doBxqRFP9NPDqGLRo';
  ghpath: string = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';
  gmpath: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png'
}
