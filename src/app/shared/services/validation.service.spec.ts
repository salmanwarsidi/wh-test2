import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service).toBeTruthy();
    });

    it('should validate email', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValidEmail('test@gmail.com')).toBe(true);
    })

    it('should invalidate email', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValidEmail('testgmail.com')).toBe(false);
    })

    it('should validate required', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValidRequired('test')).toBe(true);
    })

    it('should invalidate required', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValidRequired('')).toBe(false);
    })

    it ('should validate valid email', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValid('test@gmail.com', 'email')).toBe(true);
    })

    it ('should invalidate false email', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValid('test', 'email')).toBe(false);
    })

    it ('should invalidate false field', () => {
        const service: ValidationService = TestBed.get(ValidationService);
        expect(service.isValid('', 'required')).toBe(false);
    })

});
