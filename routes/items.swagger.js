const itemsSwagger = {
    "/items": {
        "get": {
            "summary": "get all items",
            "tags": ["items"],
            "description": "Retrieve a list of items.",
            "responses": {
                "200": {
                    "description": "A item by id.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Item"
                            }
                        }
                    }
                },
                "404": {
                    "description": "Item with given id was not found"
                }
            }
        },
        "post": {
            "summary": "add a new item",
            "tags": ["items"],
            "description": "Add a new item",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Item"
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
                    "description": "Item updated successfully.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Item"
                            }
                        }
                    }
                },
                "404": {
                    "description": "Item with id not found."
                }
            }
        }
    },
    "/items/{id}": {
        "get": {
            "summary": "get a item by id.",
            "tags": ["items"],
            "description": "Retrieve a list of items.",
            "parameters": [
                {
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "integer"
                    },
                    "required": true,
                    "description": "The item id"
                }
            ],
            "responses": {
                "200": {
                    "description": "A item by id.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Item"
                            }
                        }
                    }
                },
                "404": {
                    "description": "Item with given id was not found"
                }
            }
        },
        "put": {
            "summary": "update a item by id.",
            "tags": ["items"],
            "description": "Update item with given id",
            "parameters": [
                {
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "integer"
                    },
                    "required": true,
                    "description": "The item id"
                }
            ],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Item"
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
                    "description": "Item updated successfully.",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Item"
                            }
                        }
                    }
                },
                "404": {
                    "description": "Item with id not found."
                }
            }
        },
        "delete": {
            "summary": "delete a item by id.",
            "tags": ["items"],
            "description": "Deletes a item by id.",
            "parameters": [
                {
                    "in": "path",
                    "name": "id",
                    "schema": {
                        "type": "integer"
                    },
                    "required": true,
                    "description": "The item id"
                }
            ],
            "responses": {
                "200": {
                    "description": "Status code for item deleted successfully"
                },
                "404": {
                    "description": "Item with id not found"
                }
            }
        }
    }
};

module.exports = itemsSwagger;
