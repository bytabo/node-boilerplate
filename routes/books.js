/**
 * @swagger
 * components:
 *  schemas:
 *      Book:
 *          type: object
 *          required:
 *              - id
 *              - title
 *              - author
 *              - finished
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The auto-generated id of the book.
 *              title:
 *                  type: string
 *                  description: The title of the book.
 *              author:
 *                  type: string
 *                  description: Holger Glatt
 *              finished:
 *                  type: boolean
 *                  description: true
 *          example:
 *              id: 123
 *              title: The Pragmatic Programmer
 *              author: Andy Hunt / Dave Thomas
 *              finished: true
 */



const express = require('express');

const router = express.Router();
const books = [
    {
        id: 1,
        title: 'test',
        author: 'holger1',
        finished: true
    }, {
        id: 2,
        title: 'test2',
        author: 'holger2',
        finished: false
    },
];

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of Books.
 *     description: Retrieve a list of Books.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Book'
 */
router.get('/', async (req, res) => {
    res.json(books);
});

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: get a book by id.
 *     description: Retrieve a list of Books.
 *     parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The book id
 *     responses:
 *       200:
 *         description: A book by id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *   put:
 *     summary: get a book by id.
 *     description: Retrieve a list of Books.
 *     parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The book id
 *
 *
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *                  example:
 *                      title: test3
 *                      author: Jessica Smith
 *                      finished: true
 *
 *     responses:
 *       200:
 *         description: A book by id.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.get('/:id', async (req, res) => {
    res.json(books[req.params.id]);
});

router.put('/:id', async (req, res) => {
    res.json(books[req.params.id]);
});

module.exports = router;

// kann man swagger kommentare in json file auslagern?
// example routen anlegen (delete, post fehlen noch)
// descriptions anpassen
// -> in pr gießen
