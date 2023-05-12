import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';

  data: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  labels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  options: any = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };
  colors: any[] = [
    { backgroundColor: 'rgba(0,123,255,0.2)', borderColor: 'rgba(0,123,255,1)', borderWidth: 2 },
    { backgroundColor: 'rgba(255,193,7,0.2)', borderColor: 'rgba(255,193,7,1)', borderWidth: 2 }
  ];
}
