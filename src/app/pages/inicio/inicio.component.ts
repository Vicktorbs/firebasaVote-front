import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = []

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('goty').valueChanges().pipe(
      map((resp: Game[]) => {
        return resp.map(({name, votes}) => ({name, value: votes}))
        // Destructuracion
      })
    ).subscribe(
      resp => {
        // console.log(resp);
        this.juegos = resp
      }
    )
  }

}
