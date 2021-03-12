const makeService = ({ cron, logger }) => () => {
    // examples for cronjobInterval
    // 0 1 * * * -> every day at 12am
    // 0 0 * * 0 -> every sunday
    // 0 1 1 * * -> every month

    const scheduleCronjob = (cronjobInterval) => {
        cron.schedule(cronjobInterval, async () => {
            try {
                logger.info(`Run cronjob with interval ${cronjobInterval}`);
            } catch (error) {
                logger.error('Error executing cronjob', error);
            }
        });
    };

    return scheduleCronjob;
};

module.exports = makeService;
