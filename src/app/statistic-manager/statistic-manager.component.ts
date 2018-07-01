import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs-compat/Subscription';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-statistic-manager',
  templateUrl: './statistic-manager.component.html',
  styleUrls: ['./statistic-manager.component.css']
})
export class StatisticManagerComponent implements OnInit, OnDestroy {
  
  stockQuote: number;
  sub: Subscription;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {

    this.sub = this.dataService.getQuotes()
      .subscribe( quote => {
        this.stockQuote = quote
      });

      console.log(this.stockQuote);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
