import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { SharedModule } from '@app/shared/shared.module';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [FormComponent, DataTableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be valid', () => {

        component.email = 'test@gmail.com';
        component.name = 'test name';
        component.amount = '123456';

        // component.save();
        fixture.detectChanges();
        expect(component.save()).toBeTruthy();

        component.dataSvc.records$.subscribe((records) => {
            expect(records.length).toEqual(1);
        })

    });

    it('should be invalid and trigger required error', () => {

        const nativeElement = fixture.nativeElement;
        // component.email = '';
        // component.name = '';
        // component.amount = '';

        // component.save();
        fixture.detectChanges();
        expect(component.save()).toBeFalsy();

        const invalidErrorName = nativeElement.querySelector('div.name input-validation-errors');
        expect(invalidErrorName.querySelector('p.required') === null).toBe(false);

        const invalidErrorEmail = nativeElement.querySelector('div.email input-validation-errors');
        expect(invalidErrorEmail.querySelector('p.required') === null).toBe(false);

        const invalidErrorAmount = nativeElement.querySelector('div.amount input-validation-errors');
        expect(invalidErrorAmount.querySelector('p.required') === null).toBe(false);
        
    });

    it('should be invalid and trigger email error', () => {

        const nativeElement = fixture.nativeElement;
        component.email = 'gmail.com';
        component.name = 'name';
        component.amount = '10000';

        // component.save();
        fixture.detectChanges();
        expect(component.save()).toBeFalsy();

        const invalidErrorEl = nativeElement.querySelector('div.email input-validation-errors');
        expect(invalidErrorEl.querySelector('p.email') === null).toBe(false);
        
    });

    it ('should contain input icon user', () => {
        const nativeElement = fixture.nativeElement;
        const iconInp = nativeElement.querySelector('icon-input[icon="user"]');
        expect(iconInp === null).toBe(false);
        expect(iconInp.querySelector('i.fa-user') === null).toBe(false);
    })

    it ('should contain input icon email', () => {
        const nativeElement = fixture.nativeElement;
        const iconInp = nativeElement.querySelector('icon-input[icon="envelope"]');
        expect(iconInp === null).toBe(false);
        expect(iconInp.querySelector('i.fa-envelope') === null).toBe(false);
    })

    it ('should contain input icon money-bill', () => {
        const nativeElement = fixture.nativeElement;
        const iconInp = nativeElement.querySelector('icon-input[icon="money-bill"]');
        expect(iconInp === null).toBe(false);
        expect(iconInp.querySelector('i.fa-money-bill') === null).toBe(false);
    })

});
