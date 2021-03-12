const makeService = () => {
    function addTen(number) {
        const numberPlusTen = number + 10;

        return numberPlusTen;
    }

    function getTypeOfVariable(variable) {
        return typeof variable;
    }

    return {
        addTen, getTypeOfVariable,
    };
};

module.exports = makeService;
