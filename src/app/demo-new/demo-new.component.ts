import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-new',
  templateUrl: './demo-new.component.html',
  styleUrls: ['./demo-new.component.scss']
})
export class DemoNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'studyTS';
  result: number;
  num1: number;
  num2: number;
  operator: any;

  number1(eventt: any): void {
    this.num1 = eventt.target.value;
    // console.log(event.target.value);
  }
  number2(eventt: any): void {
    this.num2 = eventt.target.value;
    // console.log(event.target.value);
  }

  getOperator(event: any) {
    this.operator = event.target.value;
  }

  caculate(): void {
    if(this.operator == "add") this.result = (this.num1*1 + this.num2*1);
    if(this.operator == "sub") this.result = (this.num1 - this.num2);
    if(this.operator == "mul") this.result = (this.num1 * this.num2);
    if(this.operator == "div") this.result = (this.num1 / this.num2);

  }


}

