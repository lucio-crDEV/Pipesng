import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "pepito";
  nombreUpper: string = "PEPITO";
  nombreCompleto: string = "pEpItO"

  fecha: Date = new Date()

}
