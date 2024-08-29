import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service'
import { CreateService } from 'src/app/services/create/create.service'
import { RefreshService } from 'src/app/services/refresh/refresh.service'

@Component({
    selector: 'app-add-pop-up',
    templateUrl: './add-pop-up.component.html',
    styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent {
    @Input() flag!: boolean
    @Input() training!: boolean
    @Input() trainingId!: number
    @Output() haveFlag = new EventEmitter<boolean>()
    @Output() trainingChange = new EventEmitter<boolean>()

    userId: number = inject(AuthService).isAuthSession;
    createService = inject(CreateService);
    refreshService = inject(RefreshService);

    change(arg: boolean) {
        this.flag = !arg;
        this.haveFlag.emit(this.flag);
        console.log(typeof(this.trainingId) )
    }

    toggleTraining() {
        this.training = !this.training
        this.trainingChange.emit(this.training)
    }

    formCreateTraining: FormGroup<{userId:any, title:any}> = new FormGroup({
        userId: new FormControl(this.userId, Validators.required),
        title: new FormControl(null, Validators.required)
    })

    formCreateExercise: FormGroup<{userId:any, trainingId:any, title:any, weight:any, repetition:any, iteration:any}> = new FormGroup({
        userId: new FormControl(this.userId, Validators.required),
        trainingId: new FormControl(this.trainingId, Validators.required),
        title: new FormControl(null, Validators.required),
        weight: new FormControl(null, Validators.required),
        repetition: new FormControl(null, Validators.required),
        iteration: new FormControl(null, Validators.required)
        
    })

    ngOnInit() {
        this.formCreateExercise.patchValue({
            userId: this.userId,
            trainingId: this.trainingId
        })
    }

    onSubmit(event: Event){
        if(this.formCreateTraining.valid){
            // @ts-ignore
            this.createService.createTraining(this.formCreateTraining.value).subscribe(
                response => {
                    console.log(response);
                    this.change(this.flag)
                    this.refreshService.triggerRefresh();
                }
                
            )
        }

        if(this.formCreateExercise.valid){
            // @ts-ignore
            this.createService.createExercise(this.formCreateExercise.value).subscribe(
                response => {
                    console.log(response);
                    this.change(this.flag)
                    this.refreshService.triggerRefresh();
                }
                
            )
        }
    }

}
