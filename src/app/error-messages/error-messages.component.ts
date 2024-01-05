import { Component } from '@angular/core';
import { ErrorMessage } from '../model';
import { ErrorsService } from '../services/errors.service';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent {

  errorMessages: ErrorMessage[] = [];

  constructor(private errorsService: ErrorsService) { }

  ngOnInit(): void {
    this.errorsService.getErrors().subscribe({
      next: (result: ErrorMessage[]) => {
        this.errorMessages = result;
        console.log('Error messages:', result);
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    });
  }
}
