import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Olympic } from '../core/models/Olympic';

@Component({
  selector: 'app-pie-chart-ngx',
  templateUrl: './pie-chart-ngx.component.html',
  styleUrls: ['./pie-chart-ngx.component.scss']
})
export class PieChartNgxComponent implements OnInit {
  // @ViewChild('customTooltipTemplate', { static: true }) customTooltipTemplate!: TemplateRef<any>;
  // customTooltipTemplate: any;
  @Input() olympicsData!: Olympic[];

  
  data = [
    {
      name: 'Italy',
      value: 30,
    },
    {
      name: 'Spain',
      value: 50,
    },
    {
      name: 'United states',
      value: 50,
    },
    {
      name: 'Germany',
      value: 50,
    },
    {
      name: 'France',
      value: 50,
    },
    // ... Add more data as needed
  ];
  view: [number, number] = [700, 700]; // Ajustez la taille du graphique selon vos besoins
  showLegend = true; // Affiche ou masque la légende
  explodeSlices = false; // Indique si les tranches doivent être éclatées


  constructor() {
    // this.customTooltipTemplate = this.tooltipTemplate;
   }

  ngOnInit(): void {
    console.log(this.olympicsData);
    
  }
    // Méthode pour personnaliser le contenu du tooltip
    customTooltipText(data: any): string {
      console.log(this.olympicsData);
      return `<div class="toptop">${data.data.name}<br /> <i class="fa-solid fa-medal"></i>${data.value}</div>`;

    }


}
