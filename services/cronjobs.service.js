const makeService = ({ cron, logger }) => () => {
    // ------------------------------
    // every day at 12am
    // ------------------------------
    cron.schedule('0 1 * * *', async () => {
        try {
            logger.info('Run daily cronjob');
        } catch (error) {
            logger.error('Error executing daily cronjob', error);
        }
    });

    // ------------------------------
    // every sunday
    // ------------------------------
    cron.schedule('0 0 * * 0', async () => {
        try {
            logger.info('Run weekly cronjob');
        } catch (error) {
            logger.error('Error executing weekly cronjob', error);
        }
    });

    // ------------------------------
    // every month
    // ------------------------------
    cron.schedule('0 1 1 * *', async () => {
        try {
            logger.info('Run monthly cronjob');
        } catch (error) {
            logger.error('Error executing monthly cronjob', error);
        }
    });
};

module.exports = makeService;
