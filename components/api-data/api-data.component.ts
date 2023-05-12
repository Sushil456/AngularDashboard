import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent {
  pieChartData: any[] = [];
  barChartData: any[] = [];
  lineChartData: any[] = [];

  pieChartLabels: any[] = [];
  barChartLabels: any[] = [];
  lineChartLabels: any[] = [];

  pieChartOptions: any = {
    responsive: true
  };
  barChartOptions: any = {
    responsive: true
  };
  lineChartOptions: any = {
    responsive: true
  };

  pieChartType: any = 'pie';
  barChartType: any = 'bar';
  lineChartType: any = 'line';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData(): void {
    this.http.get<any>('https://api.example.com/chart-data').subscribe((data: any) => {
      // Extract data from the API response and populate the chart arrays
      this.pieChartData = data.pieChart.data;
      this.barChartData = data.barChart.data;
      this.lineChartData = data.lineChart.data;

      this.pieChartLabels = data.pieChart.labels;
      this.barChartLabels = data.barChart.labels;
      this.lineChartLabels = data.lineChart.labels;
    });
  }
}
