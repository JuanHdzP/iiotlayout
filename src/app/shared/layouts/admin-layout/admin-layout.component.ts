import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IJwtPayload } from '../../interfaces/jwt-payload';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-admin-layout',
  template: `
    <div id="main-wrapper">
      <nav-bar [user]="user" (onRefresh)="refresh()"></nav-bar>
      <side-nav></side-nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      #main-wrapper {
        opacity: 1;
      }
    `,
  ],
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  user: IJwtPayload;
  scriptsToLoad: string[] = [
    'assets/js/custom.min.js',
    'assets/js/deznav-init.js',
  ];
  constructor(
    private globalService: GlobalService,
    private renderer2: Renderer2,
    private jwtHelper: JwtHelperService
  ) {}

  ngAfterViewInit(): void {
    this.loadScripts();
  }

  ngOnInit(): void {
    this.loadPayload();
  }

  loadPayload() {
    this.user = JSON.parse(localStorage.getItem('payload'));
  }

  refresh() {
    this.loadPayload();
  }

  private loadScripts() {
    this.scriptsToLoad.forEach((script, index) => {
      const scriptElemet: HTMLScriptElement = this.globalService.loadScripts(
        this.renderer2,
        script,
        index
      );
      scriptElemet.onerror = () => {
        console.error(`Script ${script} not found`);
      };
      scriptElemet.onload = () => {
        // console.log('Scrip loaded');
      };
    });
  }
}
