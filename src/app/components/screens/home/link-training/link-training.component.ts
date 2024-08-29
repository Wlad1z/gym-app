import { Component, inject, Input } from '@angular/core'
import { AuthService } from 'src/app/services/auth/auth.service'
import { ITrainig } from 'src/app/services/trainings/training.interface'

@Component({
    selector: 'app-link-training',
    templateUrl: './link-training.component.html',
    styleUrls: ['./link-training.component.css']
})
export class LinkTrainingComponent {
    @Input() item!: ITrainig
    userId: number = inject(AuthService).isAuthSession
    flag: boolean = false

    updateFlag(newValue: boolean) {
        this.flag = newValue
    }
}
