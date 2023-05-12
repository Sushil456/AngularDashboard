import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrls: ['./ng-chart.component.css']
})
export class NgChartComponent {

  datas:any[] = [13,22,35,23,12,29,20];


  barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };


  barChartLabels = ['label1', 'label2', 'label3','label4','label5', 'label6',' label7'];

  barChartType = 'pie';

  barChartLegend = true;

  barChartData = [
    { data: this.datas, label: 'Label First' },
    { data: [28, 48, 40, 19], label: 'Label Second' }
  ];

  // chartClicked(event: any) {
  //   console.log(event);
  // }

  // chartHovered(event: any) {
  //   console.log(event);
  // }

}
