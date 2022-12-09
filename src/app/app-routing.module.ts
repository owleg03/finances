import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { DescriptionComponent } from './components/description/description.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { MonthsComponent } from './components/months/months.component';
import { ViewExpensesComponent } from './components/view-expenses/view-expenses.component';

const routes: Routes = [
  { path: 'description', component: DescriptionComponent }, 
  { path: 'expenses', component: ViewExpensesComponent },
  { path: 'expenses/edit', component: EditExpenseComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'months', component: MonthsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
