import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Olympic } from '../core/models/Olympic';
import { Router } from '@angular/router';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart-ngx',
  templateUrl: './pie-chart-ngx.component.html',
  styleUrls: ['./pie-chart-ngx.component.scss']
})
export class PieChartNgxComponent implements OnInit {

  @Input() olympicsData!: Olympic[];

  
  data = [{}];
  view: [number, number] = [0, 500]; // Ajustez la taille du graphique selon vos besoins
  showLegend = false; // Affiche ou masque la légende
  showLabel = true;
  legendPosition : LegendPosition = LegendPosition.Below
  explodeSlices = false; // Indique si les tranches doivent être éclatées


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.resizePieChart()
  }

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

  // Permet de gérer l'affichage du pie chart quand la taille de la page est modifiée
  @HostListener('window: resize')
  onWindoWResize(){
    this.resizePieChart()
  }
  //  Méthode permettant de modifier la taille du pie chart en fonction de la taille de la page
  resizePieChart():void{
    if(window.innerWidth < 768){
      this.view = [window.innerWidth * .9 , 500]
      if(window.innerWidth < 600){
        this.view = [window.innerWidth * 1 , 300]
        this.showLabel = false
        this.showLegend = true
      } else {
        this.showLabel = true
        this.showLegend = false
        this.view = [window.innerWidth * .9 , 500]
      }
    }else {
      this.view = [window.innerWidth * 0.9 , 500]
      
    }
  }


}
