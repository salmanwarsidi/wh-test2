import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
    {
        path: 'private',
        loadChildren: '@app/modules/private/private.module#PrivateModule',
        canActivate: [AuthGuard],
        data: { animation: 'PrivatePage' }
    },
    {
        path: 'public',
        loadChildren: '@app/modules/public/public.module#PublicModule',
        data: { animation: 'PublicPage' }
    },
    {
        path: 'home',
        loadChildren: '@app/modules/homepage/homepage.module#HomepageModule',
        data: { animation: 'HomePage' }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
