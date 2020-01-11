import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/public';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


    constructor(
        public dataSvc: DataService
    ) { }

    ngOnInit() {
    }

 
}
