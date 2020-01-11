import { IconInputRefDirective } from './icon-input-ref.directive';
import { NgModule, Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { By } from '@angular/platform-browser';

@Component({
    template: `<input id="inp" type="text" placeholder="Amount" iconInputRef>`,
})
class HostComponent { }
@NgModule({
    declarations: [HostComponent],
    exports: [HostComponent],
})
class HostModule { }

describe('IconInputRefDirective', () => {

    let component: HostComponent;
    let element: HTMLElement;
    let debugElement: DebugElement;
    let fixture: ComponentFixture<HostComponent>;    


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IconInputRefDirective],
            imports: [CommonModule, HostModule],
        }).compileComponents();

        fixture = TestBed.createComponent(HostComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;

        fixture.detectChanges(); 
    });

    it('should create a host instance', () => {
        expect(component).toBeTruthy();
    });

    // it('set focus value to true', () => {
    //     // fixture.detectChanges();
    //     // const el = debugElement.query(By.css('#inp'));
    //     // let de = fixture.debugElement.query(By.directive(IconInputRefDirective));
    //     // console.log(de);
    //     // el.triggerEventHandler('focus', null);
    //     // fixture.detectChanges();
    //     // expect(debugElement.properties.focus).toEqual(true);
    // })

});
