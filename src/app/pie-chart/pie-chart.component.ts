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

import { Component, OnInit , Input ,OnChanges, SimpleChanges, ViewChild} from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { Chart , ChartConfiguration, ChartData, ChartEvent, ChartType, ChartTypeRegistry, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Olympic } from '../core/models/Olympic';
Chart.register(DatalabelsPlugin);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent  implements OnChanges {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    @Input() olympicsData: Olympic[] = [];
    tooltipFullLabel: string[]=[];

    
    // Pie
    public pieChartOptions: ChartConfiguration['options'] = {
      plugins: {
        legend: {
          display: false,
          position: 'left' ,
        },
        tooltip:{
            backgroundColor: '#04838f',
            bodyColor: '#fff',
            displayColors: false,
            padding: 10,
            position:'average',
            yAlign: 'bottom',
            // mode: 'index',
            // callbacks: {
            //     label: function(context: any) {
            //         const label = context.label;
            //         // tooltipLabel = context.label;
            //         const iconHtml = '<i class="fa-solid fa-medal"></i>';
            //         // const iconHtml = '';
            //         const value = context.parsed;
            //         console.log(context);
            //         // return [`<span>${label}</span>`,`<span>${iconHtml}  ${value}</span>`];
            //         return [label,`${iconHtml}  ${value}`];
            //     }
            // },
            external: (context: any) => {
                const label = context.label;
                // Tooltip Element
                const { chart, tooltip  } = context;
                let tooltipEl = chart.canvas.parentNode.querySelector('div');


                    // tooltipLabel = context.label;
                    const iconHtml = '<i class="fa-solid fa-medal"></i>';
                    // const iconHtml = '';
                    const value = context.parsed;
                    // console.log(chart);
                    // console.log(tooltip);
                    // console.log(tooltipEl);
                    console.log(this.olympicsData);
                    
                    
                    
                    // return [`<span>${label}</span>`,`<span>${iconHtml}  ${value}</span>`];
                    return "coucou";
                    // return [label,`${iconHtml} skjjhsdf ${value}`];
            }

        },
        datalabels: {
          formatter: (value: any, ctx: any) => {
            if (ctx.chart.data.labels) {
              const label = ctx.chart.data.labels[ctx.dataIndex];
            // //   const iconHtml = '<i class="fa-solid fa-medal"></i>';
            //   const iconSvg ='<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' width=\'16\' height=\'16\' fill=\'currentColor\' class=\'bi bi-medal-fill\'><path d=\'M4 2a3 3 0 0 0 6 0H4z\'/><path d=\'M14 2a3 3 0 0 0 6 0H14z\'/><path fill-rule=\'evenodd\' d=\'M2 0a1 1 0 0 1 1 1v3.928l1.64-1.641a9.034 9.034 0 0 1 2.546 2.922l1.456-.874a1 1 0 0 1 .948-.004l1.456.874a9.034 9.034 0 0 1 2.546-2.922L13 4.928V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.5h-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.5H2V1a1 1 0 0 1 1-1z\'/><path d=\'M0 4a8 8 0 0 1 8 8 1 1 0 0 0 2 0 10 10 0 0 0-10-10A1 1 0 0 0 0 4z\'/></svg>';
            // //   const iconSvg ='<img src="data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' width=\'16\' height=\'16\' fill=\'currentColor\' class=\'bi bi-medal-fill\'><path d=\'M4 2a3 3 0 0 0 6 0H4z\'/><path d=\'M14 2a3 3 0 0 0 6 0H14z\'/><path fill-rule=\'evenodd\' d=\'M2 0a1 1 0 0 1 1 1v3.928l1.64-1.641a9.034 9.034 0 0 1 2.546 2.922l1.456-.874a1 1 0 0 1 .948-.004l1.456.874a9.034 9.034 0 0 1 2.546-2.922L13 4.928V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4.5h-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3.5H2V1a1 1 0 0 1 1-1z\'/><path d=\'M0 4a8 8 0 0 1 8 8 1 1 0 0 0 2 0 10 10 0 0 0-10-10A1 1 0 0 0 0 4z\'/></svg>" alt="medal icon">';
            //   const iconHtml = `<img src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(iconSvg)}" alt="medal icon">`;
            //   return `${label} ${iconHtml}  ${value}`;
              return ctx.chart.data.labels[ctx.dataIndex];
            }
            return ''
          },
          
        },
      },
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ['#A95963','#A8385D','#7AA3E5','#A27EA8','#AAE3F5','#ADCDED'],
          borderWidth: 0
      
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

    // Méthode appelée lorsqu'il y a des changements dans les propriétés d'entrée
    ngOnChanges(changes: SimpleChanges): void {
        // if (changes.olympicsData) {
        // Mettez à jour les données du graphique lorsque les données du parent changent
        this.updateChartData();
        // }
    }

    // Méthode pour mettre à jour les données du graphique
    private updateChartData(): void {
        // Assurez-vous que les données sont disponibles avant de les utiliser
        if (this.olympicsData && this.olympicsData.length > 0) {
            // Mettez à jour les données du graphique en fonction des données du parent
            // Vous devez adapter cela en fonction de la structure réelle de vos données
            this.pieChartData.labels = this.olympicsData.map(item => item.country);
            // this.tooltipFullLabel = [`<span>${label}</span>`, `<span>${iconHtml}  ${value}</span>`];
            // console.log(this.olympicsData);
            
            // console.log(this.olympicsData.map((item) => item.participations.map(particip => particip.medalsCount)));
            // console.log(this.olympicsData.map((item) => item.participations.reduce((totalMedalsCount , currentMedalCount) => { return totalMedalsCount + currentMedalCount.medalsCount},0)));
            
            this.pieChartData.datasets[0].data = this.olympicsData.map((item) => item.participations.reduce((totalMedalsCount , currentMedalCount) => { return totalMedalsCount + currentMedalCount.medalsCount},0))

            // Rafraîchissez le graphique après la mise à jour des données
            if (this.chart) {
                this.chart.update();
            }
        }
    }

  };



  // constructor() { }

  // ngOnInit(): void {
  // }


