import { Component, OnInit, Inject } from '@angular/core';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-usa',
  template: `
        <div class="class2">
          <h4>United States</h4>
          India population: {{indiapopulation}} billion.
        </div>`,
  styles: ['.class2 { border: 2px solid red; padding: 10px; margin-top:10px;}']
})
export class UsaComponent implements OnInit {
  indiapopulation: number;

  constructor(@Inject(PopulationService) private ps:PopulationService) { 
    this.indiapopulation = this.ps.IndiaPopulation;
  }

  ngOnInit() {
  }

}
