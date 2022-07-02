# Todo API v1

This is a simple TODO API that allows you to create, read, update, and delete TODOs.

## Endpoints

    - GET `/todos`: this provides a paginated response of all TODOs.
        the following query parameters are supported:
            - `page`: the page number to return. defaults to 1.
            - `size`: the number of items to return. defaults to 10.

    - `/todos/{id}`: Read, update, and delete a TODO.
        - GET: returns the TODO with the given id.
        - PUT: updates the TODO with the given id.
        - DELETE: deletes the TODO with the given id

## Schema

The Todo Schema is as follows (note that the `id` is a BUID):

### Request Schema

    ``` json
    {
        "title": "My Todo",
        "description": "This is my todo"
    }
    ```

### Response Schema

    ``` json
    {
        "id": "12345678901234567890123456789012",
        "title": "My Todo",
        "description": "This is my todo",
        "timestamp": "2020-01-01T00:00:00.000Z",
    }
    ``` 

## Technologies Used

1. Node js (Express Framework)
2. MongoDB

## Usage

1. Install all dependencies using `npm install`
2. Create a .env file and using the .env_sample file as a template fill in the MONGO_DB_URL
3. The dev server can be started using the following command `npm run dev`
4. The dev server will start on port 3000
5. The dev server will automatically create a collection called `todos`
