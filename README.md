# Nextjs 13 Basic Features

## Introduction

This is a basic Nextjs project that demonstrates some of the basic features of Nextjs version 13. It includes:

- Routing
- Dynamic routing
- Server-side rendering
- Static and dynamic data fetching
- Styling with Tailwind CSS
- TypeScript support
- Error handling
- API routes

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 16.13.0 or higher)
- [Git](https://git-scm.com/downloads)

## Getting Started

To start the project, run the following command:

```bash
npm install
```

This will install all the necessary dependencies for the project.

Next, run the following command to start the development server:

```bash
npm run dev
```

or, to run from Docker:

```bash
docker build -t next13-basic-features:dev .
docker run -p 2013:2013 nextjs13-basic-features:dev
```

The development server will start at `http://localhost:2013`. You can access the application by navigating to this URL in your web browser.

## Steps for Dockerization

1. Create a Dockerfile in the root directory of the project.

2. Add the following lines to the Dockerfile:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 2013
CMD [ "npm","run","dev" ]
```

3. Create a .dockerignore file in the root directory of the project.

4. Add the following line to the .dockerignore file:

```dockerignore
node_modules
```

5. Modify the "dev" script in the package.json file to include the "--port 2013 --hostname 0.0.0.0" flags.

6. Build the Docker image by running the following command:

```bash
docker build -t nextjs13-basic-features:dev .
```

7. Run the Docker image by running the following command:

```bash
docker run -p 2013:2013 nextjs13-basic-features:dev
```

8. Access the application by navigating to `http://localhost:2013` in your web browser.
