import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryTotal } from 'src/app/models/category-total';
import { Expense } from 'src/app/models/expense';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoriesTotal: CategoryTotal[] = [];
  public category = Category;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((expenses) => {
      this.categoriesTotal = this.categoriesFromExpenses(expenses);
    });
  }

  categoriesFromExpenses(expenses: Expense[]): CategoryTotal[] {
    let categoriesTotal: CategoryTotal[] = [];

    // Calculate total expenses for each category
    for (let expense of expenses) {
      let categoryTotal = categoriesTotal.find(c => c.category == expense.category);
      if (categoryTotal == null) {
        categoryTotal = new CategoryTotal();
        categoryTotal.category = expense.category;
        categoriesTotal.push(categoryTotal);
      }
      categoryTotal.value += expense.value;
    }

    // Calculate total expenses
    let summary = 0;
    categoriesTotal.forEach(e => {
      summary += e.value;
    })

    // Calculate total percentage of expenses for each category
    for (let categoryTotal of categoriesTotal) {
      categoryTotal.percent = categoryTotal.value * 100 / summary;
    }

    return categoriesTotal;
  }
}
