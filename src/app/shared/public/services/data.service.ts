import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private readonly _records = new BehaviorSubject<Data[]>([]);
    public records$ = this._records.asObservable();

    constructor() { }

    add(data: Data) {
        let records = this._records.getValue();
        records.splice(0, 0, data);
        this._records.next(records);
    }

    remove(name: string) {
        let records = this._records.getValue();
        const idx = records.findIndex((row) => {
            return row.name == name;
        })
        if (idx || idx >= 0) {
            records.splice(idx, 1);
            this._records.next(records);
        }
    }
    
}
