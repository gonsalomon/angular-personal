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
