import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '@app/shared/shared.module';
import { DataTableComponent } from './data-table/data-table.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [LayoutComponent, ListComponent, FormComponent, DataTableComponent],
    imports: [
        PublicRoutingModule,
        RouterModule,
        FormsModule,
        CommonModule,
        SharedModule
    ]
})
export class PublicModule { }
