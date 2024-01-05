import { Component } from '@angular/core';
import { VacuumCleaner, VacuumStatus } from '../model';
import { VacuumService } from '../services/vacuum.service';

@Component({
  selector: 'app-search-vacuum',
  templateUrl: './search-vacuum.component.html',
  styleUrls: ['./search-vacuum.component.css']
})
export class SearchVacuumComponent {
  name: string;
  status: string;
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  vacuumCleaners: VacuumCleaner[];
  statusOptions = Object.values(VacuumStatus).filter(value => typeof value === 'string');

  constructor(private vacuumService: VacuumService) { 
    this.name = '';
    this.status = '';
    this.vacuumCleaners = [];
  }

  filterVacuumCleaners(): void {
    console.log('Filtering vacuum cleaners');
    console.log('Name:', this.name);
    console.log('Status:', this.status);
    console.log('Date from:', this.dateFrom);
    console.log('Date to:', this.dateTo);
  }

  ngOnInit(): void {
    this.vacuumService.getAllVacuum().subscribe({
      next: (result: VacuumCleaner[]) => {
        this.vacuumCleaners = result;
        console.log('Vacuum cleaners:', result);
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    })
  }
}
