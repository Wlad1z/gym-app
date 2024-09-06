import { Component, inject, Input } from '@angular/core';
import { HomeComponent } from 'src/app/components/screens/home/home.component';
import { DeleteTrainingService } from 'src/app/services/delete/delete.service';
import { RefreshService } from 'src/app/services/refresh/refresh.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Input() id!:number;
  @Input() userId!:number;
  @Input() url!:string;

  deleteTraining = inject(DeleteTrainingService)
  refreshService = inject(RefreshService);

  delete(){
    this.deleteTraining.delete({userId: this.userId, id: this.id}, this.url).subscribe(
      response => {
          console.log(response);
          this.refreshService.triggerRefresh();
      }
    )
  }
}
