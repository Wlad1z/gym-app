import { Component, inject, Input, SimpleChanges } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { RefreshService } from 'src/app/services/refresh/refresh.service'
import { ITrainig } from 'src/app/services/trainings/training.interface'
import { UpdateService } from 'src/app/services/update/update.service'

@Component({
    selector: 'app-link-training',
    templateUrl: './link-training.component.html',
    styleUrls: ['./link-training.component.css']
})
export class LinkTrainingComponent {
    @Input() item!: ITrainig
    userId: number = inject(AuthService).isAuthSession
    flag: boolean = false;

    updateSevice = inject(UpdateService);
    refreshService = inject(RefreshService);

    formUpdate: FormGroup<{title:any}> = new FormGroup({
        title: new FormControl(null, Validators.required)
    })
    
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['item'] && this.item) {
            this.formUpdate.patchValue({ title: this.item.title || '' }); // Проверьте наличие title
        }
    }

    change(flag:boolean){
        this.flag = !flag;
    }

    updateFlag(newValue: boolean) {
        this.flag = newValue
    }

    update(){
        const title= this.formUpdate.get('title')?.value;
        if(this.formUpdate.valid){
            this.updateSevice.updateTraining({userId: this.userId, id: this.item.id, title: title }).subscribe(
                response => {
                    console.log(response);
                    this.refreshService.triggerRefresh();
                }
            )
        }
        
    }
}
