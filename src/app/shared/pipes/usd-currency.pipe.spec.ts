import { UsdCurrencyPipe } from './usd-currency.pipe';

describe('UsdCurrencyPipe', () => {
    it('transform value to currency', () => {
        const pipe = new UsdCurrencyPipe();
        const ret = pipe.transform('12345');
        expect(ret).toBe('$12,345.00');
        // expect(pipe).toBeTruthy();
    });
});
