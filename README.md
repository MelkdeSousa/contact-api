<div align="center">

<img alt="banner contact api" src="./.github/banner.gif" width="30%" height="auto" style="border-radius: 20%">

# Contact API

</div>

> Rest API for manage and make available an agenda of people's contacts

## 🖥️ Base URL

- Version 1: `/api/v1/`

## ↗️ Endpoints

- User: `/users`

  - ✔️ Create user: `POST /users`
    - Body (JSON):
      ```typescript
      {
        "first_name": string | required
        "last_name": string | required
        "email": string | required
        "telephones": string[] | required
      }
      ```
  - ✔️ List users: `GET /users`
  - ✔️ Show user details: `GET /users/<user_id>`
  - ✔️ Filters
    - by name: `GET /users?name=name`
    - by email: `GET /users?email=email`
    - by first name: `GET /users?first_name=first_name`
    - by last name: `GET /users?last_name=last_name`
  - ✔️ Edit data of user: `PUT /users/<user_id>`
    - Body (JSON):
      ```typescript
      {
        "first_name": string | optional
        "last_name": string | optional
        "email": string | optional
        "telephones": string[] | optional
      }
      ```
  - ✔️ Delete user: `DELETE /users/<user_id>`

## ⚠️ Requirements to start project

- Git
- Docker
- Docker Compose
- NodeJS
- NPM/Yarn

## 🎊 Get started

- Clone repository:

```bash
git clone https://github.com/melkdesousa/contact-api.git
```

- Install dependencies:

```bash
yarn
```

or

```bash
npm -i
```

- Run container database and node:

```bash
yarn docker:up
```

- Access project:

```bash
http://localhost:3333/api/v1/
```

- Stop containers and all project:

```bash
yarn docker:down
```
