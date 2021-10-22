import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NotifierService} from "angular-notifier";
import {matDialogAnimations} from "@angular/material/dialog";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  result: number | null = null;
  number1: number | null = null;
  number2: number | null = null;
  selectedOption: string = "";
  action: any[] = [
    {act: '/'},
    {act: '*'},
    {act: '+'},
    {act: '-'},
    {act: 'sin'},
  ];

  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  public add() {
    if (this.notifierMessage('error', 'Поля должны быть заполнены!')) {
    }
    else{
      this.mathematicalActions('+');
    }
  }

  public subtract() {
    if (this.notifierMessage('error', 'Поля должны быть заполнены!')) {
    }
    else{
      this.mathematicalActions('-');
    }
  }

  multiply() {
    if (this.notifierMessage('error', 'Поля должны быть заполнены!')) {
    }
    else{
      this.mathematicalActions('*');
    }
  }

  divide() {
    if (this.notifierMessage('error', 'Поля должны быть заполнены!')) {
    }
    else{
      this.mathematicalActions('/');
    }
  }

  ac() {
    this.number1 = null;
    this.number2 = null;
  }

  sin() {
    if (this.notifierMessage('error', 'Хоть одно поле должно быть заполнено!')) {
    } else {
      this.notifier.hideAll();
      this.number1 = this.number2;
      this.result = Math.sin((this.number1 ?? 0));
    }
  }


  notifierMessage(type: string, message: string): boolean {
    if (this.number1 == null && this.number2 == null) {
      this.notifier.notify(type, message);
      return true;
    }
    else{
      this.notifier.hideAll();
      return false;
    }
  }

  mathematicalActions(action: string){
    this.result = eval((this.number1 ?? 0) + action + (this.number2 ?? 0));
  }

  mathematicalActionsForMatOption(){
    const arr = this.action;
    const foundEl = arr.find(el => el.act === this.selectedOption);

    if (this.notifierMessage('error', 'Поля должны быть заполнены!')) {
    }
    else{
      this.result = eval((this.number1 ?? 0)+foundEl.act+(this.number2 ?? 0));
    }
  }
}
