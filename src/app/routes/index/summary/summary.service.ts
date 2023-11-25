import { Injectable, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class SummaryService {

    api = inject(ApiService);

    funds: number = 0;
    expenses: number = 0;
    earnings: number = 0;
    balance: number = 0;

    constructor() {

        this.api.GetStats().subscribe((data) => {
            console.log(data);
            this.funds = data.funds;
            this.expenses = data.expenses;
            this.earnings = data.earnings;
            this.balance = this.earnings + this.funds - this.expenses;
        })
    }

}