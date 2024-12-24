import { getOptionLetter } from './alphabet';

describe('getOptionLetter', () => {
    it('should return "a" for index 0', () => {
        expect(getOptionLetter(0)).toBe('a');
    });

    it('should return "b" for index 1', () => {
        expect(getOptionLetter(1)).toBe('b');
    });

    it('should return "z" for index 25', () => {
        expect(getOptionLetter(25)).toBe('z');
    });

    it('should fail if index bigger than 25', () => {
        expect(getOptionLetter(26)).toEqual(new Error('Index must be between 0 and 25'));
    });
});
