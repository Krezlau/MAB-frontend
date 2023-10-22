import { Component } from '@angular/core';
import { AlertServiceService, IAlert } from './services/alert-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';

  alertVisible$ = this.alertService.getAlert().pipe(map(alert => alert.isVisible));
  alertMessage$ = this.alertService.getAlert().pipe(map(alert => alert.message));
  alertType$ = this.alertService.getAlert().pipe(map(alert => alert.type));

  constructor(private alertService: AlertServiceService) {
  }


  onClick() {
    this.alertService.show('Hello World!', 'success');
  }

  alertHide() {
    this.alertService.hide();
  }
}
