import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" *ngIf="authService.isAuthenticated()">
      <span>FinMind - Sistema Financeiro</span>
      <span class="spacer"></span>
      <button mat-button (click)="logout()">
        <mat-icon>logout</mat-icon>
        Sair
      </button>
    </mat-toolbar>
    
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-content {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class AppComponent {
  title = 'FinMind';

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    // O roteamento já redireciona para login automaticamente
  }
}