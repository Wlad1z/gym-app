import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() name!: string;
  isChecked: boolean = false;

  ngOnInit(): void {

    const savedState = localStorage.getItem(this.name);
    this.isChecked = savedState === 'true'; 
  }

  onCheckboxChange(event: Event): void {
    this.isChecked = (event.target as HTMLInputElement).checked;

    if (this.isChecked) {
      localStorage.setItem(this.name, 'true');
    } else {
      localStorage.removeItem(this.name);
    }
  }
}