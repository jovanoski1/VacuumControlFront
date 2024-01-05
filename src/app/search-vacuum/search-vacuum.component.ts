import { Component } from '@angular/core';
import { VacuumCleaner, VacuumStatus } from '../model';
import { VacuumService } from '../services/vacuum.service';

@Component({
  selector: 'app-search-vacuum',
  templateUrl: './search-vacuum.component.html',
  styleUrls: ['./search-vacuum.component.css']
})
export class SearchVacuumComponent {
  name: string | null = null;
  status: string | null = null;
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  vacuumCleaners: VacuumCleaner[];
  statusOptions = Object.values(VacuumStatus).filter(value => typeof value === 'string');

  constructor(private vacuumService: VacuumService) { 
    this.vacuumCleaners = [];
  }

  filterVacuumCleaners(): void {
    this.vacuumService.filterVacuum({
      name: this.name,
      status: Object.keys(VacuumStatus).find((key) => VacuumStatus[key as keyof typeof VacuumStatus] === this.status) as VacuumStatus,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo
    }).subscribe({
      next: (result: VacuumCleaner[]) => {
        this.vacuumCleaners = result;
        console.log('Filtered vacuum cleaners:', result);
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    })

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
