import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { IExercis } from 'src/app/services/exercises/exercis.interface';
import { RefreshService } from 'src/app/services/refresh/refresh.service';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
    selector: 'app-exercis-change',
    templateUrl: './exercis-change.component.html',
    styleUrls: ['./exercis-change.component.css']
})
export class ExercisChangeComponent {
    @Input() item!: IExercis;
    @Input() id!: number;
    @Input() flag!: boolean;
    @Output() changeFlag = new EventEmitter<boolean>();

    userId = inject(AuthService).isAuthSession;
    updateService = inject(UpdateService);
    refreshService = inject(RefreshService);

    formUpdate: FormGroup<{id: any; trainingId:any; title:any; weight: any; repetition: any; iteration: any; userId: any;}> = new FormGroup({
        id: new FormControl(null, Validators.required),
        trainingId: new FormControl(null, Validators.required),
        title: new FormControl(null, Validators.required),
        weight: new FormControl(null, Validators.required),
        repetition: new FormControl(null, Validators.required),
        iteration: new FormControl(null, [Validators.required, Validators.max(5)]),
        userId: new FormControl(null, Validators.required),
    })

    constructor() {
        // Подписка на изменения поля repetition
        this.formUpdate.get('iteration')?.valueChanges.subscribe(value => {
            const numberValue = value as number;

            if (numberValue > 5) {
              this.formUpdate.get('iteration')?.setValue(5, { emitEvent: false });
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['item'] && this.item) {
            this.formUpdate.patchValue({ id: this.item.id || '' });
            this.formUpdate.patchValue({ trainingId: this.id || '' });
            this.formUpdate.patchValue({ userId: this.userId  || '' });
        }
    }

    change(arg: boolean) {
        this.flag = !arg;
        this.changeFlag.emit(this.flag);
    }

    onSubmit(event: Event){
        if(this.formUpdate.valid){
            // @ts-ignore
            this.updateService.updateExercise(this.formUpdate.value).subscribe(
                response => {
                    console.log(response);
                    this.refreshService.triggerRefresh();
                }
            )
        }
    }
}
