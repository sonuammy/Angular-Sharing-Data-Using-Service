import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-india',
  template:`
        <div class="class1">
          <h4>India</h4>
        </div>`,
  styles: ['.class1 { border: 2px solid red; padding: 10px; }']
})
export class IndiaComponent implements OnInit {

  population: number = 1.32;

  constructor(@Inject(PopulationService) private ps:PopulationService) {
    this.ps.IndiaPopulation = this.population;
   }

  ngOnInit() {
  }

}
