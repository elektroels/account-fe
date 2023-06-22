import transactionsReducer, { changeFromDate, changeToDate } from './transactionSlice';

describe('transactions reducer', () => {
    const initialState = {
        transactions: [],
        fromDate: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().slice(0, 10),
        toDate: new Date().toISOString().slice(0, 10)
    };

    it('should handle initial state', () => {
        expect(transactionsReducer(undefined, { type: 'unknown' })).toEqual({
            transactions: [],
            fromDate: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().slice(0, 10),
            toDate: new Date().toISOString().slice(0, 10)
        });
    });
  
    it('should change from date', () => {
        const actual = transactionsReducer(initialState, changeFromDate('11-22-3333'));
        expect(actual.fromDate).toEqual('11-22-3333');
    });

    it('should change to date', () => {
        const actual = transactionsReducer(initialState, changeToDate('11-22-3333'));
        expect(actual.toDate).toEqual('11-22-3333');
    });

});
