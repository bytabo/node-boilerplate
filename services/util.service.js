const makeService = () => {
    const addTen = (number) => {
        const numberPlusTen = number + 10;

        return numberPlusTen;
    };

    const getTypeOfVariable = (variable) => typeof variable;

    return {
        addTen,
        getTypeOfVariable,
    };
};

module.exports = makeService;
