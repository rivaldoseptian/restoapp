# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /staff/register`
- `POST /staff/login`
- `POST /staff/createmenu`

&nbsp;

## 1. POST /staff/register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

&nbsp;

## 2. POST /staff/login

Description:
Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
   {"accesToken": "string"}
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email/Password required"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "invalid email/password"
}
```

&nbsp;

## 3. POST /user/google-sign-in

Description:
Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Created)_

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

&nbsp;

## 4. GET /movies/

Description:

- GET movies

  Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 5,
    "title": "mantap",
    "synopsis": "Axax",
    "trailerUrl": "asdasdsd",
    "imgUrl": "sdvdvdv",
    "rating": 3,
    "genreId": 1,
    "authorId": 1,
    "createdAt": "2023-02-14T14:52:38.554Z",
    "updatedAt": "2023-02-14T14:52:38.554Z",
    "Genre": {
      "id": 1,
      "name": "comedy",
      "createdAt": "2023-02-13T11:32:17.621Z",
      "updatedAt": "2023-02-13T11:32:17.621Z"
    },
    "User": {
      "id": 1,
      "username": "budi",
      "email": "budi@gmail.com",
      "role": "author"
    }
  },
  {
    "id": 1,
    "title": "pagi pagi",
    "synopsis": "kksjjcc",
    "trailerUrl": "hsgcmdd",
    "imgUrl": "uucgdmd",
    "rating": 2,
    "genreId": 1,
    "authorId": 1,
    "createdAt": "2023-02-13T11:32:17.630Z",
    "updatedAt": "2023-02-13T11:32:17.630Z",
    "Genre": {
      "id": 1,
      "name": "comedy",
      "createdAt": "2023-02-13T11:32:17.621Z",
      "updatedAt": "2023-02-13T11:32:17.621Z"
    },...
```

&nbsp;

## 5. GET /movies/:id

Description:

- GET Movie by id

  Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "title": "pagi pagi",
  "synopsis": "kksjjcc",
  "trailerUrl": "hsgcmdd",
  "imgUrl": "uucgdmd",
  "rating": 2,
  "genreId": 1,
  "authorId": 1,
  "createdAt": "2023-02-13T11:32:17.630Z",
  "updatedAt": "2023-02-13T11:32:17.630Z",
  "Genre": {
    "id": 1,
    "name": "comedy",
    "createdAt": "2023-02-13T11:32:17.621Z",
    "updatedAt": "2023-02-13T11:32:17.621Z"
  },
  "User": {
    "id": 1,
    "username": "budi",
    "email": "budi@gmail.com",
    "role": "author"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. PUT /movies/:id

Description:

- PUT Movie by id

  Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "success update movie id"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 7. PATCH /movies/:id

Description:

- PATCH Movie by id

  Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "succes Update Status"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 8. POST /genres

Description:
Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Created)_

```json
{
  "name": "string"
}
```

&nbsp;

## 9. GET /pub/genre

Description:

- GET movies

  Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "name": "Action",
    "createdAt": "2023-02-14T14:52:38.554Z",
    "updatedAt": "2023-02-14T14:52:38.554Z"
  }
]
```

&nbsp;

## 10. GET /pub/movies/

Description:

- GET movies

  Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 5,
    "title": "mantap",
    "synopsis": "Axax",
    "trailerUrl": "asdasdsd",
    "imgUrl": "sdvdvdv",
    "rating": 3,
    "genreId": 1,
    "authorId": 1,
    "createdAt": "2023-02-14T14:52:38.554Z",
    "updatedAt": "2023-02-14T14:52:38.554Z",
    "Genre": {
      "id": 1,
      "name": "comedy",
      "createdAt": "2023-02-13T11:32:17.621Z",
      "updatedAt": "2023-02-13T11:32:17.621Z"
    },
    "User": {
      "id": 1,
      "username": "budi",
      "email": "budi@gmail.com",
      "role": "author"
    }
  },
  {
    "id": 1,
    "title": "pagi pagi",
    "synopsis": "kksjjcc",
    "trailerUrl": "hsgcmdd",
    "imgUrl": "uucgdmd",
    "rating": 2,
    "genreId": 1,
    "authorId": 1,
    "createdAt": "2023-02-13T11:32:17.630Z",
    "updatedAt": "2023-02-13T11:32:17.630Z",
    "Genre": {
      "id": 1,
      "name": "comedy",
      "createdAt": "2023-02-13T11:32:17.621Z",
      "updatedAt": "2023-02-13T11:32:17.621Z"
    },...
```

&nbsp;

## 11. POST /pub/user/register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

&nbsp;

## 12. POST /pub/user/login

Description:
Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
   {"accesToken": "string"}
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email/Password required"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "invalid email/password"
}
```

&nbsp;

## 13. POST /pub/user/google-sign-In

Description:
Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Created)_

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

&nbsp;

## 14. GET /pub/movies/bookmarks

Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

_Response (201 - ok)_

```json
{
  "id": 2,
  "CustomerId": 1,
  "MovieId": 5,
  "Movies": {
    "id": 5,
    "title": "mantap",
    "synopsis": "Axax",
    "trailerUrl": "asdasdsd",
    "imgUrl": "sdvdvdv",
    "rating": 3,
    "genreId": 1,
    "authorId": 1,
    "createdAt": "2023-02-14T14:52:38.554Z",
    "updatedAt": "2023-02-14T14:52:38.554Z"
  }
}
```

&nbsp;

# 15. GET /pub/movies/detail/:MovieId

Description:

- GET Movie by id

  Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "title": "pagi pagi",
  "synopsis": "kksjjcc",
  "trailerUrl": "hsgcmdd",
  "imgUrl": "uucgdmd",
  "rating": 2,
  "genreId": 1,
  "authorId": 1,
  "createdAt": "2023-02-13T11:32:17.630Z",
  "updatedAt": "2023-02-13T11:32:17.630Z",
  "Genre": {
    "id": 1,
    "name": "comedy",
    "createdAt": "2023-02-13T11:32:17.621Z",
    "updatedAt": "2023-02-13T11:32:17.621Z"
  },
  "User": {
    "id": 1,
    "username": "budi",
    "email": "budi@gmail.com",
    "role": "author"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 16. POST /pub/movies/detail/Movie:Id

Description:

- POST bookmark

  Request:

- headers:

```json
{
  "access_token": "string (required)"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": 2,
  "CustomerId": 1,
  "MovieId": 5
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
