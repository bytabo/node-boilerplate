const makeService = (axios) => {
    async function getJson(url) {
        try {
            const json = await axios.get(url);
            const parsedJson = jsonService.parseJson(json.data);

            return parsedJson;
        } catch (error) {
            console.error();
            throw new Error(500);
        }
    }

    const logJson = async () => {
        const parsedJson = await jsonService.getJson(process.env.TEST_URL);
        console.info('parsedJson :', parsedJson);
    };

    const jsonService = {
        getJson,
        logJson,
    };

    return jsonService;
};

module.exports = makeService;
