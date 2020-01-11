import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DataTableComponent } from '../data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, SharedModule, BrowserAnimationsModule, RouterModule, RouterTestingModule],
            declarations: [DataTableComponent,ListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should contain no records and add record link', () => {
        const nativeElement = fixture.nativeElement;
        expect(nativeElement.querySelector('h2') === null).toBe(false);
        expect(nativeElement.querySelector('a.link') === null).toBe(false);
        expect(nativeElement.querySelector('app-data-table') === null).toBe(true);
    });

    it('should contain records', () => {
        const nativeElement = fixture.nativeElement;
        component.dataSvc.add({
            name: 'test',
            email: 'test@gmail.com',
            amount: 1000
        });
        fixture.detectChanges();
        expect(nativeElement.querySelector('h2') === null).toBe(true);
        expect(nativeElement.querySelector('a.link') === null).toBe(true);
        expect(nativeElement.querySelector('app-data-table') === null).toBe(false);
    });
});
