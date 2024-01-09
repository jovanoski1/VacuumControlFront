import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { VacuumCleaner } from '../model';
import { VacuumService } from '../services/vacuum.service';

@Component({
  selector: 'app-vacuum-cleaner',
  templateUrl: './vacuum-cleaner.component.html',
  styleUrls: ['./vacuum-cleaner.component.css']
})
export class VacuumCleanerComponent {
  @Input() cleaner!: VacuumCleaner;
  selectedDateTime: Date | null = null;
  isCollapsed = true;
  scheduleEnabled = false;
  operation: string = 'start';


  constructor(private vacuumService: VacuumService,private renderer: Renderer2, private el: ElementRef) { }

  toggleCollapse() {
    const collapseEl = this.el.nativeElement.querySelector('.collapse');
    if (collapseEl) {
      if (this.isCollapsed) {
        this.renderer.addClass(collapseEl, 'show');
      } else {
        this.renderer.removeClass(collapseEl, 'show');
      }
      this.isCollapsed = !this.isCollapsed;
    }
  }

  remove(event: Event) {
    event.stopPropagation();
    this.vacuumService.remove(this.cleaner).subscribe({
      next: (result) => {
        console.log(result);
        alert('Cleaner '+ this.cleaner.name + ' removed!');
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  submit() {
    if (!this.selectedDateTime) {
      this.vacuumService.normalOperation(this.cleaner.id, this.operation).subscribe({
        next: (result) => {
          console.log(result);
          if (result) {
            alert('Operation '+ this.operation + ' success!');
            setTimeout(() => {
              window.location.reload();
            }, result);
          }
          else {
            alert('Operation '+ this.operation + ' failed!');
          }
        },
        error: (err) => {
          console.log(err);
        }
      }); 
    }
    else{
      this.vacuumService.scheduleOperation(this.cleaner.id, this.operation, this.selectedDateTime).subscribe({
        next: (result) => {
          console.log(result);
          alert('Operation '+ this.operation + ' successfully scheduled!');
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  canRemove(){
    return localStorage.getItem('permissions')?.includes('can_remove_vacuum') === true;
  }
  canStart(){
    return localStorage.getItem('permissions')?.includes('can_start_vacuum') === true;
  }
  canStop(){
    return localStorage.getItem('permissions')?.includes('can_stop_vacuum') === true;
  }
  canDischarge(){
    return localStorage.getItem('permissions')?.includes('can_discharge_vacuum') === true;
  }
}

