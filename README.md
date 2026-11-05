# Node.js Demo App

A small Node.js web application built with Express. It has a home page and a health-check endpoint. The project also includes a Dockerfile so the app can be built and run in a container.

## Screenshots

Add the three screenshots from the project to `docs/images/` using these filenames. The image links below will display them once the files are committed:

### Docker Hub image

![Docker Hub repository showing the published image tags](docs/images/dockerhub-repository.png)

### Health check

![The health endpoint returns a success message](docs/images/health-check.png)

### Home page

![The home page displays the welcome message](docs/images/home-page.png)

## Features

- The home page (`/`) displays: **Welcome to My Automated CI/CD Project!**
- The health endpoint (`/health`) returns JSON showing that the application is running.
- Docker support using the included `Dockerfile`.
- Automated tests can be run with the project's test script.

## Requirements

- Node.js and npm, or Docker

## Run locally

1. Clone the repository and enter its folder:

   ```bash
   git clone https://github.com/ABHINAY7908/nodejs-demo-app.git
   cd nodejs-demo-app
   ```

2. Install dependencies and start the application:

   ```bash
   npm ci
   npm start
   ```

3. Open these URLs in your browser:

   - Home page: <http://localhost:3000/>
   - Health check: <http://localhost:3000/health>

The health check should return:

```json
{"status":"success","message":"Application is running"}
```

## Run tests

```bash
npm test
```

## Run with Docker

Build the image and start a container:

```bash
docker build -t nodejs-demo-app .
docker run --rm -p 3000:3000 nodejs-demo-app
```

Then visit <http://localhost:3000/> or <http://localhost:3000/health>.

The Docker Hub screenshot shows the image repository `abhinaylone/nodejs-demo-app`. To pull its latest image (if you have access), use:

```bash
docker pull abhinaylone/nodejs-demo-app:latest
docker run --rm -p 3000:3000 abhinaylone/nodejs-demo-app:latest
```
