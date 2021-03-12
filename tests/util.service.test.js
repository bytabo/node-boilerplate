const { addTen, getTypeOfVariable } = require('../services/util.service');

describe('the util service', () => {
    it('function addTen returns a number plus 10', () => {
        const result = addTen(20);
        expect(result).toBe(30);
    });

    it('function getTypeOfVariable returns the type of a given variable', () => {
        const type = getTypeOfVariable('lorem ipsum');
        expect(type).toBe('string');
    });
});
