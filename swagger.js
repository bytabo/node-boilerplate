const booksSwagger = require("./routes/books.swagger");

const swaggerOptions = {
   openapi: "3.0.0",
   info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
         "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
         name: "MIT",
         url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
         name: "LogRocket",
         url: "https://logrocket.com",
         email: "info@email.com",
      },
   },
   "components": {
      "schemas": {
         "Book": {
            "type": "object",
            "required": [
               "id",
               "title",
               "author",
               "finished"
            ],
            "properties": {
               "id": {
                  "type": "integer",
                  "description": "The auto-generated id of the book."
               },
               "title": {
                  "type": "string",
                  "description": "The title of the book."
               },
               "author": {
                  "type": "string",
                  "description": "Holger Glatt"
               },
               "finished": {
                  "type": "boolean",
                  "description": true
               }
            },
            "example": {
               "id": 123,
               "title": "The Pragmatic Programmer",
               "author": "Andy Hunt / Dave Thomas",
               "finished": true
            }
         }
      }
   },
   servers: [
      {
         url: "http://localhost:3000/api/",
      },
      {
         url: "https://develop.bytabo.de:3000/api/",
      },
   ],
   tags: [
      {
         name: 'books'
      }
   ],
   paths: {
      "/books": booksSwagger
   }
};


module.exports = swaggerOptions;