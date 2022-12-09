import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.css']
})
export class ViewExpensesComponent {
  expenses: Expense[] = [];
  public category = Category;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((result: Expense[]) => {
      this.expenses = result;
    });
  }
}
