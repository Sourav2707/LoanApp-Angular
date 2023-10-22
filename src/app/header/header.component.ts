import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {}
  openLoginDialog(): void {
  const dialogRef = this.dialog.open(LoginComponent, {
    width: '500px', height: '440px', // Adjust the width as needed
  });
}
}
