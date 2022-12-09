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
    console.log(expenses);

    // Calculate total expenses for each month
    for (let expense of expenses) {
      let date = new Date(expense.dateTime);
      let yearNumber = date.getFullYear();
      let monthNumber = date.getMonth();
      let month = new Date(yearNumber, monthNumber);
      let monthTotal = monthsTotal.find(m => m.month.getTime() === month.getTime());
      if (monthTotal == null) {
        monthTotal = new MonthTotal();
        monthTotal.month = month;
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