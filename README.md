

# Node Express Boilerplate

This is a boilerplate for building a REST API using Node.js and Express.js. The boilerplate includes the following features:

- **Authentication**: The boilerplate uses JWT for authentication. The user can register, log in, and use the refresh token to obtain a new access token.
- **Error Handling**: The boilerplate includes error handling middleware to catch and handle errors.
- **Validation**: The boilerplate includes input validation using Joi.
- **Security**: The boilerplate includes security middleware such as helmet and csurf.
- **Database**: The boilerplate uses MongoDB as the database.
- **Testing**: The boilerplate includes unit tests using Jest and Supertest.

## How to use

### Run Locally from ZIP Download

1. Download the project ZIP file from GitHub.
2. Extract the ZIP file on your computer.
3. Open the extracted project folder in your editor.
4. Open a terminal inside the project folder.
5. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1h
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRES=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRES=10d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_EXPIRES=900000
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_ADDRESS=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_FROM=your_email@example.com
EMAIL_TO=
ADMIN_EMAIL=admin@example.com
FRONTEND_URL=http://localhost:3000
PUBLIC_CAREERS_BASE_URL=http://localhost:3000/careers
```

### Environment Variable Purpose

| Variable                   | What it is used for                               |
| -------------------------- | ------------------------------------------------- |
| `PORT`                     | Backend server port                               |
| `MONGO_URI`                | MongoDB connection string                         |
| `JWT_SECRET`               | Main JWT secret                                   |
| `JWT_EXPIRE`               | Main JWT expiry                                   |
| `ACCESS_TOKEN_SECRET`      | Access token secret                               |
| `ACCESS_TOKEN_EXPIRES`     | Access token expiry                               |
| `REFRESH_TOKEN_SECRET`     | Refresh token secret                              |
| `REFRESH_TOKEN_EXPIRES`    | Refresh token expiry                              |
| `CLOUDINARY_CLOUD_NAME`    | Cloudinary storage config                         |
| `CLOUDINARY_API_KEY`       | Cloudinary API key                                |
| `CLOUDINARY_API_SECRET`    | Cloudinary API secret                             |
| `EMAIL_EXPIRES`            | Email token/OTP expiry time                       |
| `EMAIL_HOST`               | SMTP host                                         |
| `EMAIL_PORT`               | SMTP port                                         |
| `EMAIL_ADDRESS`            | Sender email address                              |
| `EMAIL_PASS`               | Sender email password or app password             |
| `EMAIL_FROM`               | From email used in outgoing mails                 |
| `EMAIL_TO`                 | Optional recipient field                          |
| `ADMIN_EMAIL`              | Admin email                                       |
| `FRONTEND_URL`             | Frontend app URL                                  |
| `PUBLIC_CAREERS_BASE_URL`  | Public careers page URL used in email/link flows  |

### Run the Server

For normal run:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

### Run Tests

```bash
npm test
```

### How to Run Full System Locally

1. Run this backend first on port `5000`.
2. Then run `iwmsadvisors` frontend or `iwmsadvisors-dashboard`.
3. In both frontend projects, set `NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1`.

### What Is Used Where

- `Express.js` is used to create the REST API server.
- `MongoDB` with `Mongoose` is used for database models and queries.
- `JWT` is used for authentication and token-based access control.
- `Joi` and custom validation middleware are used for request validation.
- `Multer` is used for file uploads.
- `Cloudinary` is used for cloud media storage.
- `Nodemailer` is used for email sending.
- `Helmet`, `csurf`, `xss-clean`, and `express-mongo-sanitize` are used for security.
- `Winston` and `Morgan` are used for logging.
- `Jest` and `Supertest` are used for testing.

### Main Folder Guide

- `index.js` starts the server and connects to MongoDB.
- `src/app.js` creates the Express app.
- `src/core/config/` contains config and logger setup.
- `src/core/middlewares/` contains auth, upload, validation, and error middlewares.
- `src/entities/` contains feature-based modules like auth, blog, career, contact, FAQ, real estate, and service pages.
- `src/lib/` contains helper utilities such as pagination, mail helpers, and response formatting.
- `uploads/` stores uploaded files and images.
- `logs/` stores application logs.

## API Endpoints

The boilerplate includes the following API endpoints:

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in a user.
- **POST /auth/refresh-token**: Get a new access token using the refresh token.
- **POST /auth/forget-password**: Send a password reset email to the user.
- **POST /auth/reset-password**: Reset the user's password.
- **GET /user/all-users**: Get all users.
- **GET /user/all-admins**: Get all admin users.
- **GET /user/all-super-admins**: Get all super admin users.
- **GET /user/:id**: Get a user by ID.
- **PATCH /user/:id**: Update a user.
- **DELETE /user/:id**: Delete a user.
- **POST /user/upload-avatar**: Upload a user's avatar.

## Tests

The boilerplate includes unit tests using Jest and Supertest. The tests cover the following endpoints:

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in a user.
- **POST /auth/refresh-token**: Get a new access token using the refresh token.
- **POST /auth/forget-password**: Send a password reset email to the user.
- **POST /auth/reset-password**: Reset the user's password.
- **GET /user/all-users**: Get all users.
- **GET /user/all-admins**: Get all admin users.
- **GET /user/all-super-admins**: Get all super admin users.
- **GET /user/:id**: Get a user by ID.
- **PATCH /user/:id**: Update a user.
- **DELETE /user/:id**: Delete a user.
- **POST /user/upload-avatar**: Upload a user's avatar.

# NodeJS_Backend boilarplate
