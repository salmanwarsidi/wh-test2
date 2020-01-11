import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/public';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    filter: any = {};

    constructor(
        public dataSvc: DataService
    ) { }

    ngOnInit() {
    }

    setOrder(order: string) {

        if (this.filter.order && this.filter.order == order) {
            this.filter.order = '-' + order;
            this.filter.sort = 'desc';
        } else {
            this.filter.order = order;
            this.filter.sort = 'asc';
        }

    }

}
