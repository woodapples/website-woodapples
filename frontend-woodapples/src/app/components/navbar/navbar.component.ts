import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [Menubar]
})

export class NavbarComponent implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: ['/']
            },
            {
                label: 'Address',
                icon: 'pi pi-building',
                routerLink: ['/address']
            },
            {
                label: 'Cooking',
                icon: 'pi pi-paperclip',
                routerLink: ['/cooking']
            },
            {
                label: 'Fermentation',
                icon: 'pi pi-palette',
                routerLink: ['/fermentation']
            },
            {
              label: 'Login',
              icon: 'pi pi-user',
              routerLink: ['/login'],
              styleClass: 'login-menu-item'
            }
        ]
    }
} 