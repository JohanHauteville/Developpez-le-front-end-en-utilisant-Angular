// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pie-chart',
//   templateUrl: './pie-chart.component.html',
//   styleUrls: ['./pie-chart.component.scss']
// })
// export class PieChartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit , ViewChild} from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent  {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    // Pie
    public pieChartOptions: ChartConfiguration['options'] = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        datalabels: {
          formatter: (value: any, ctx: any) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          },
        },
      },
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: ['Italie', 'Spain', 'United States', 'Germany', 'France'],
      datasets: [
        {
          data: [76, 54, 345, 115, 113 ],
          // borderColor: '#36A2EB',
      backgroundColor: ['#A95963','#A8385D','#7AA3E5','#A27EA8','#AAE3F5','#ADCDED'],
      
        },
        
      ],
    };
    public pieChartType: ChartType = 'pie';
    public pieChartPlugins = [DatalabelsPlugin];

    // events
    public chartClicked({
      event,
      active,
    }: {
      event: ChartEvent;
      active: object[];
    }): void {
      console.log(event, active);
    }

    public chartHovered({
      event,
      active,
    }: {
      event: ChartEvent;
      active: object[];
    }): void {
      console.log(event, active);
    }


  };



  // constructor() { }

  // ngOnInit(): void {
  // }


