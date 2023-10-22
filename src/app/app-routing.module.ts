import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { CreditTrackerComponent } from './credit-tracker/credit-tracker.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'emi', component: EmiCalculatorComponent},
  {path: 'credit-track', component: CreditTrackerComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
