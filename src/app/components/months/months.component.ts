import { Component } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { MonthTotal } from 'src/app/models/month-total';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent {
  monthsTotal: MonthTotal[] = [];
  
  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe((expenses) => {
      this.monthsTotal = this.monthsFromExpenses(expenses);
    });
  }

  monthsFromExpenses(expenses: Expense[]): MonthTotal[] {
    let monthsTotal: MonthTotal[] = [];

    // Calculate total expenses for each month
    for (let expense of expenses) {
      let monthTotal = monthsTotal.find(m => m.month == expense.dateTime.getMonth());
      if (monthTotal == null) {
        monthTotal = new MonthTotal();
        monthTotal.month = expense.dateTime.getMonth();
        monthsTotal.push(monthTotal);
      }
      monthTotal.value += expense.value;
    }

    // Calculate total expenses
    let summary = 0;
    monthsTotal.forEach(e => {
      summary += e.value;
    })

    // Calculate total percentage of expenses for each month
    for (let monthTotal of monthsTotal) {
      monthTotal.percent = monthTotal.value * 100 / summary;
    }

    return monthsTotal;
  }
}