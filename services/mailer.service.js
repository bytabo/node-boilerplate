const makeService = (nodemailer, ejs) => {
    const sendMail = async (to, subject, text) => {
        const transportObject = {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        };
        const transporter = nodemailer.createTransport(transportObject);
        const html = await ejs.renderFile('./data/email-templates/default.ejs', { text }, { async: true });
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to,
            subject,
            html,
        };
        const mailSentResult = await transporter.sendMail(mailOptions);

        return mailSentResult;
    };

    return {
        sendTestMail: async (to, text) => {
            const subject = 'This is a test mail';
            const message = `This is the text of the test mail: ${text}`;

            return sendMail(to, subject, message);
        },
    };
};

module.exports = makeService;
