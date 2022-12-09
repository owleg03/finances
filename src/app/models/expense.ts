import { Category } from "./category";

export class Expense {
    id = 0;
    name = "";
    value = 0;
    dateTime = new Date();
    category = Category.Fun;
}