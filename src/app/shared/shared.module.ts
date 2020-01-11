import { NgModule } from '@angular/core';
import { UsdCurrencyPipe } from './pipes/usd-currency.pipe';
import { UsdCurrencyDirective } from './directives/usd-currency.directive';
import { IconInputComponent } from './components/icon-input/icon-input.component';
import { IconInputRefDirective } from './directives/icon-input-ref.directive';
import { CommonModule } from '@angular/common';
import { InputValidationComponent } from './components/input-validation/input-validation.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UsdCurrencyPipe,
        UsdCurrencyDirective,
        IconInputComponent,
        IconInputRefDirective,
        InputValidationComponent,
    ],
    exports: [
        UsdCurrencyPipe,
        UsdCurrencyDirective,
        IconInputComponent,
        InputValidationComponent,
        IconInputRefDirective,
    ],
    providers: [
        UsdCurrencyPipe,
    ]
})
export class SharedModule { }
