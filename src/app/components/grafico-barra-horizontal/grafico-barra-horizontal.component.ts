import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit {

  results: any[] = [
    {
      "name": "Game 1",
      "value": 20
    },
    {
      "name": "Game 2",
      "value": 25
    },
    {
      "name": "Game 3",
      "value": 42
    },
    {
      "name": "Game 4",
      "value": 28
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Jugos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {}

  ngOnInit() {
    
  }

  onSelect(event) {
    console.log(event);
  }

}
