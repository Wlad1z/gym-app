import { Component, inject, Input } from '@angular/core';
import { DeleteTrainingService } from 'src/app/services/delete/delete.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Input() id!:number;
  @Input() userId!:number;

  deleteTraining = inject(DeleteTrainingService)

  delete(){
    this.deleteTraining.deleteTraining({userId: this.userId, id: this.id}).subscribe(
      response => {
          console.log(response);
      }
    )
  }
}
