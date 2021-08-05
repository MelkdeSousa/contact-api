<div align="center">

<img alt="banner contact api" src="./.github/banner.gif" width="50%" height="auto" style="border-radius: 20%">

# Contact API

</div>

> Rest API for manage and make available an agenda of people's contacts

## Endpoints

- User: `/users`

  - ✔️ Create user: `POST /users`
    - Body (JSON):
      ```json
      {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@gmail.com",
        "telephones": ["000000000", "000000000"]
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
      ```json
      {
        "first_name": "John",
        "last_name": "Doe Wick",
        "email": "wick.doe@john.com"
      }
      ```
  - ✔️ Delete user: `DELETE /users/<user_id>`
