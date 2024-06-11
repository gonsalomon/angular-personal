import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  currentTheme: string = '';
  title = 'angular-personal';
  lkpath: string = 'https://lh3.googleusercontent.com/d/1BsProUA_RXfahd-doBxqRFP9NPDqGLRo';
  ghpath: string = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';
  gmpath: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png'

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
      this.updateBodyClass(theme);
    });
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

  private updateBodyClass(theme: string) {
    document.body.className = '';
    document.body.classList.add(theme);
  }
}
