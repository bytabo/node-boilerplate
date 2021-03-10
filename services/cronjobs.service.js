const makeService = (cron) => () => {
    // ------------------------------
    // every day at 12am
    // ------------------------------
    cron.schedule('0 1 * * *', async () => {
        try {
            console.info('Run daily cronjob');
        } catch (error) {
            console.error('Error executing daily cronjob', error);
        }
    });

    // ------------------------------
    // every sunday
    // ------------------------------
    cron.schedule('0 0 * * 0', async () => {
        try {
            console.info('Run weekly cronjob');
        } catch (error) {
            console.error('Error executing weekly cronjob', error);
        }
    });

    // ------------------------------
    // every moth
    // ------------------------------
    cron.schedule('0 1 1 * *', async () => {
        try {
            console.info('Run monthly cronjob');
        } catch (error) {
            console.error('Error executing monthly cronjob', error);
        }
    });
};

module.exports = makeService;
