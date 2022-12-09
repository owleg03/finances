import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewExpensesComponent } from './components/view-expenses/view-expenses.component';
import { EditExpenseComponent } from './components/edit-expense/edit-expense.component';
import { DescriptionComponent } from './components/description/description.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MonthsComponent } from './components/months/months.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewExpensesComponent,
    EditExpenseComponent,
    DescriptionComponent,
    CategoriesComponent,
    MonthsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
