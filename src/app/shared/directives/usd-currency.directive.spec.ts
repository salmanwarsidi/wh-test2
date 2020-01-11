import { UsdCurrencyDirective } from './usd-currency.directive';
import { Component, NgModule, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { By } from '@angular/platform-browser';

@Component({
    template: `<input id="inp" type="text" placeholder="Amount" usdCurrencyFormatter>`,
})
class HostComponent { }
@NgModule({
    declarations: [HostComponent],
    exports: [HostComponent],
})
class HostModule { }

describe('UsdCurrencyDirective', () => {

    let component: HostComponent;
    let element: HTMLElement;
    let debugElement: DebugElement;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule, HostModule, SharedModule], // * we import the host module
        }).compileComponents();

        fixture = TestBed.createComponent(HostComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;
        fixture.detectChanges(); // * so the directive gets appilied
    });

    it('should create a host instance', () => {
        expect(component).toBeTruthy();
    });

    it('set input value', () => {
        const el = debugElement.query(By.css('#inp'));
        el.nativeElement.value = '12345';
        fixture.detectChanges();
        el.triggerEventHandler('blur', null);
        fixture.detectChanges();
        expect(el.nativeElement.value).toBe('12345');
    })

});
