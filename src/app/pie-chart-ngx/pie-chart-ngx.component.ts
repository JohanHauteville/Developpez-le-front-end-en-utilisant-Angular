import { Component, Input, OnInit } from '@angular/core';
import { Olympic } from '../core/models/Olympic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-chart-ngx',
  templateUrl: './pie-chart-ngx.component.html',
  styleUrls: ['./pie-chart-ngx.component.scss']
})
export class PieChartNgxComponent implements OnInit {

  @Input() olympicsData!: Olympic[];

  
  data = [{}];
  view: [number, number] = [700, 700]; // Ajustez la taille du graphique selon vos besoins
  showLegend = true; // Affiche ou masque la légende
  explodeSlices = false; // Indique si les tranches doivent être éclatées


  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Méthode pour personnaliser le contenu du tooltip
  customTooltipText(data: any): string {
    return `<div class="toptop">${data.data.name}<br /> <i class="fa-solid fa-medal"></i>  ${data.value}</div>`;

  }

  // Méthode appelée lorsqu'il y a des changements dans les propriétés d'entrée
  ngOnChanges(): void{
      if(this.olympicsData){
        this.data = this.olympicsData.map(data => {
          const value = data.participations.reduce((totalMedalCount, currentMedalCount) => { return totalMedalCount + currentMedalCount.medalsCount},0);
          return ({ name: data.country, value: value })
        })
      }
      
  }
  // Méthode pour gérer le clic sur une tranche du PieChart
  // event provenant du "$event" permet de récupérer l'élément cliqué
  handleClic(event: any):void{
 
    const data = this.olympicsData.filter(data => data.country === event.name);
    this.router.navigateByUrl(`/${data[0].id}`);
  
  }


}
