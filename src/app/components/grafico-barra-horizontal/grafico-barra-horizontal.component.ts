import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnInit, OnDestroy {

  @Input() results: any[] = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  constructor() {

    // http://localhost:5000/firestore-grafica-47093/us-central1/api/goty
    // http://localhost:5000/firestore-grafica-47093/us-central1/api/goty/Death-stranding

    // this.intervalo = setInterval(() => {
    //   console.log('Change');
    //   const newResult = [...this.results]
    //   for (const i in newResult) {
    //     newResult[i].value = Math.round(Math.random() * 100)
    //   }
    //   this.results = [...newResult]
    // }, 30000)

  }
  ngOnDestroy() {
    // clearInterval(this.intervalo)
  }

  ngOnInit() {
    
  }

  onSelect(event) {
    console.log(event);
  }

}
