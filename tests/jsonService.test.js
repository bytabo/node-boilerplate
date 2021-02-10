const testObject = {
    userId: 1,
    id: 1,
    title: 'lorem ipsum',
    completed: false,
};

const axios = {
    get: jest.fn(() => ({
        data: testObject,
    })),
};

const axiosWithError = {
    get: () => Promise.reject(new Error('I am an error')),
};

const service = require('./services/jsonService')(axios);
const serviceWithError = require('./services/jsonService')(axiosWithError);

describe('The json service', () => {
    describe('function getJson', () => {
        test('calls axios.get', async () => {
            const spy = jest.spyOn(axios, 'get');
            await service.getJson('lorem');
            expect(spy).toHaveBeenCalled();
        });
        test('throws error on problem', async () => {
            expect.assertions(1);
            try {
                await serviceWithError.getJson('lorem');
            } catch (error) {
                expect(error).toEqual('I am an error');
            }
        });
    });
});
