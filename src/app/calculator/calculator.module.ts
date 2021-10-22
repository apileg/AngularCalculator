import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorComponent} from "./calculator.component";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {NotifierModule} from "angular-notifier";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  }
]

@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    NotifierModule,
    MatSelectModule,
    MatOptionModule,
  ]
})
export class CalculatorModule { }
