const booksSwagger = {
    "get": {
        "summary": "get a book by id.",
        "description": "Retrieve a list of Books.",
        "parameters": [
            {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "The book id"
            }
        ],
        "responses": {
            "200": {
                "description": "A book by id.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Book"
                        }
                    }
                }
            },
            "404": {
                "description": "Book with given id was not found"
            }
        }
    },
    "put": {
        "summary": "update a book by id.",
        "description": "Update book with given id",
        "parameters": [
            {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "The book id"
            }
        ],
        "requestBody": {
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Book"
                    },
                    "example": {
                        "title": "test3",
                        "author": "Jessica Smith",
                        "finished": true
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Book updated successfully.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Book"
                        }
                    }
                }
            },
            "404": {
                "description": "Book with id not found."
            }
        }
    },
    "delete": {
        "summary": "delete a book by id.",
        "description": "Deletes a book by id.",
        "parameters": [
            {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "The book id"
            }
        ],
        "responses": {
            "200": {
                "description": "Status code for book deleted successfully"
            },
            "404": {
                "description": "Book with id not found"
            }
        }
    }
}


module.exports = booksSwagger