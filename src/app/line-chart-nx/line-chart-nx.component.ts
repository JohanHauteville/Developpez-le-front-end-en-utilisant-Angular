import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Olympic } from '../core/models/Olympic';

@Component({
  selector: 'app-line-chart-nx',
  templateUrl: './line-chart-nx.component.html',
  styleUrls: ['./line-chart-nx.component.scss']
})
export class LineChartNxComponent implements OnInit {
  @Input() olympicData!: Olympic | undefined;

   data = [{}]
    view: [number, number] = [700, 300]; // Ajustez la taille du graphique selon vos besoins
    showLegend = true; // Affiche ou masque la légende

  constructor() { }

  ngOnInit(): void {

  }

  // Méthode appelée lors d'un changement sur les inputs
  ngOnChanges(){
    this.updateData()
    
  }

  updateData(){
    if(this.olympicData && this.olympicData.participations){
      const series = this.olympicData?.participations.map(data => {
        return {
          value: data.medalsCount,
          name: data.year.toString()
        }
      })
      this.data = [
        {
          "name": "Medals",
          "series": series 
        }
      ]

    }
  }
  // Fonction pour formater le texte du tooltip
  tooltipFormatting(value: any): string {
    // Vous pouvez personnaliser le texte du tooltip ici
    return `<span>${value.name}: ${value.value}</span>`;
  }


}
