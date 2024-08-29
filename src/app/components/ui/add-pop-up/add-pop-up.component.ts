import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { CreateTrainingService } from 'src/app/services/trainings/training.create.service'

@Component({
    selector: 'app-add-pop-up',
    templateUrl: './add-pop-up.component.html',
    styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent {
    @Input() flag!: boolean
    @Input() training!: boolean
    @Output() haveFlag = new EventEmitter<boolean>()
    @Output() trainingChange = new EventEmitter<boolean>()

    userId: number = inject(AuthService).isAuthSession;
    createTrainingService = inject(CreateTrainingService);

    change(arg: boolean) {
        this.flag = !arg
        this.haveFlag.emit(this.flag)
    }

    toggleTraining() {
        this.training = !this.training
        this.trainingChange.emit(this.training)
    }

    formCreateTraining: FormGroup<{userId:any, title:any}> = new FormGroup({
        userId: new FormControl(this.userId, Validators.required),
        title: new FormControl(null, Validators.required)
    })
    onSubmit(event: Event){
        if(this.formCreateTraining.valid){
            // @ts-ignore
            this.createTrainingService.createTraining(this.formCreateTraining.value).subscribe(
                response => {
                    console.log(response);
                },
                error => {
                  console.error(error);
                  // Обработка ошибок
                }
                
            )
        }
    }

}
