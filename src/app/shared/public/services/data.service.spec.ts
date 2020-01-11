import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });


    it('should add record', () => {
        const service: DataService = TestBed.get(DataService);
        service.add({
            name: 'test',
            email: 'test@gmail.com',
            amount: 1000
        });
        service.records$.subscribe((records) => {
            expect(records.length).toBeGreaterThan(0);
        })
    });


    it('should remove record', () => {
        const service: DataService = TestBed.get(DataService);
        service.add({
            name: 'test',
            email: 'test@gmail.com',
            amount: 1000
        });

        service.remove('test');
        service.records$.subscribe((records) => {
            expect(records.length).toEqual(0);
        })

    });

});
