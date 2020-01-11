import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationComponent } from './input-validation.component';
import { By } from '@angular/platform-browser';

describe('InputValidationComponent', () => {
    let component: InputValidationComponent;
    let fixture: ComponentFixture<InputValidationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputValidationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it ('should render email error', () => {
        component.value = 'test';
        component.options = 'email';
       
        fixture.detectChanges();
        const spy = spyOn(component.validate, 'emit');
        component.validateValue();
        expect(spy).toHaveBeenCalledWith(true);

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.email'))).not.toBeNull();
    });

    it ('should not render email error', () => {
        component.value = 'test@gmail.com';
        component.options = 'email';
        
        fixture.detectChanges();
        const spy = spyOn(component.validate, 'emit');
        component.validateValue();
        expect(spy).toHaveBeenCalledWith(false);

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.email'))).toBeNull();
    })
    
    it ('should render required error', () => {
        component.value = '';
        component.options = 'required';
       
        fixture.detectChanges();
        const spy = spyOn(component.validate, 'emit');
        component.validateValue();
        expect(spy).toHaveBeenCalledWith(true);

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.required'))).not.toBeNull();
    });

    it ('should not render required error', () => {
        component.value = 'test';
        component.options = 'required';

        fixture.detectChanges();
        const spy = spyOn(component.validate, 'emit');
        component.validateValue();
        expect(spy).toHaveBeenCalledWith(false);

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.required'))).toBeNull();
    })

});
