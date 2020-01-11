import { TestBed, async, inject, getTestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthGuard', () => {

    let injector: TestBed;
    let guard: AuthGuard;
    let routeMock: any = { snapshot: {} };
    let routeStateMock: any = { snapshot: {}, url: '/public' };
    let routerMock = { navigate: jasmine.createSpy('private') }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthGuard, { provide: Router, useValue: routerMock },],
            imports: [HttpClientTestingModule]
        });
        injector = getTestBed();
        guard = injector.get(AuthGuard);
        // TestBed.configureTestingModule({
        //     providers: [AuthGuard]
        // });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));

    it('should return false and nothing happens', () => {
        const prompt = spyOn(window, "prompt").and.returnValue('abc12345');
        expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
        expect(prompt).toHaveBeenCalledWith('Enter password');
    });

    it('should return true and redirect', () => {
        const prompt = spyOn(window, "prompt").and.returnValue('abc123');
        expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
        expect(prompt).toHaveBeenCalledWith('Enter password');
    });

});
