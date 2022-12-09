import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent {
  id = 0;
  category = Category.Fun;
  expense = new Expense();

  form = this.formBuilder.group({
    id: [0, Validators.required],
    category: [Category.Fun, Validators.required]
  })

  constructor(private expensesService: ExpensesService, private formBuilder: FormBuilder) {}

  edit(): void {
    if (this.form.value.id == null || this.form.value.category == null) {
      return;
    }

    this.id = this.form.value.id;
    this.category = this.form.value.category;

    this.expensesService.putCategory(this.id, this.category).subscribe((result: Expense) => (this.expense = result));
    console.log(this.expense);
  }
}
