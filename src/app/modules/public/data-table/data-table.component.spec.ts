import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';
import { SharedModule } from '@app/shared/shared.module';
import { By } from '@angular/platform-browser';

describe('DataTableComponent', () => {
    let component: DataTableComponent;
    let fixture: ComponentFixture<DataTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [DataTableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set order to name', () => {
        component.setOrder('name');
        fixture.detectChanges();
        expect(component.filter.order).toBe('name');
        component.setOrder('name');
        fixture.detectChanges();
        expect(component.filter.order).toBe('-name');
    });

    it('should set order to email', () => {
        component.setOrder('email');
        fixture.detectChanges();
        expect(component.filter.order).toBe('email');
        component.setOrder('email');
        fixture.detectChanges();
        expect(component.filter.order).toBe('-email');
    });

    it('should display in the table', () => {
        component.dataSvc.add({
            name: 'test',
            email: 'test@gmail.com',
            amount: 1000
        });
        fixture.detectChanges();
        const ne = fixture.nativeElement;
        const tbody = ne.querySelector('tbody');
        const tr = tbody.querySelector('tr');
        const tds = tr.querySelectorAll('td');
        expect(tds[0].innerHTML).toContain('test');
        expect(tds[1].innerHTML).toContain('test@gmail.com');
        expect(tds[2].innerHTML).toContain('$1,000.00');
    });

});
