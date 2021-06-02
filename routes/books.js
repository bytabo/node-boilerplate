

/**
 * @swagger
 * /getAll:
 *   get:
 *     summary: Retrieve a list of Books.
 *     description: Retrieve a list of Books.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The book ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The book's name.
 *                         example: Clean Code Manifest
 */

const express = require('express');

const router = express.Router();

router.get('/getAll', async (req, res) => {
    res.sendStatus(200);
});
module.exports = router;



// letzter stand war hier, wir wollten das model definieren, das hat noch nicht geklappt
// https://blog.logrocket.com/documenting-your-express-api-with-swagger/
