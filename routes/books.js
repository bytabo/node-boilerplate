/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              - title
 *              - author
 *              - finished
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the book.
 *          example:
 *              title: The Pragmatic Programmer
 *              author: Andy Hunt / Dave Thomas
 *              finished: true
 */

/**
 * @swagger
 *
 * /members/feedback:
 *   post:
 *     description: Sends a mail concerning a users feedback to member
 *     responses:
 *       200:
 *          description: Mail was sent
 *          schema:
 *              $ref: '#/definitions/Book'
 *       any other:
 *          description: Server error
 */

const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.sendStatus(200);
});
module.exports = router;



// letzter stand war hier, wir wollten das model definieren, das hat noch nicht geklappt
// https://blog.logrocket.com/documenting-your-express-api-with-swagger/
