import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NgChartComponent } from '../ng-chart/ng-chart.component';
import { LineChartComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-matdash',
  templateUrl: './matdash.component.html',
  styleUrls: ['./matdash.component.css']
})
export class MatdashComponent {

  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 , componentToShow:NgChartComponent},
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 ,componentToShow:NgChartComponent},
          { title: 'Card 4', cols: 1, rows: 1 ,componentToShow:LineChartComponent}
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 , componentToShow:NgChartComponent},
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 ,componentToShow:NgChartComponent},
        { title: 'Card 6', cols: 1, rows: 1 , componentToShow:LineChartComponent}

      ];
    })
  );
}
