import { Component } from '@angular/core';
import { VacuumService } from '../services/vacuum.service';
import { VacuumCleaner } from '../model';

@Component({
  selector: 'app-create-vacuum',
  templateUrl: './create-vacuum.component.html',
  styleUrls: ['./create-vacuum.component.css']
})
export class CreateVacuumComponent {

  name: string| null = null;


  constructor(private vacuumService: VacuumService) { }

  onSubmit(): void {
    if (!this.name) {
      return;
    }
    this.vacuumService.createVacuun(this.name).subscribe({
      next: (result: VacuumCleaner) => {
        alert('Added new vacuum cleaner: ' + result.name);
        this.name = null;
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    })
  }
}
