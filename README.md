# Node.js Demo App

A small Node.js web application built with Express. It has a home page and a health-check endpoint. The project includes a Dockerfile and a Jenkins pipeline for automated testing and Docker image building.

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
- Jenkins CI pipeline checks out the source, installs dependencies, runs tests, and builds a Docker image.

## Jenkins CI Pipeline

The `Jenkinsfile` defines a Declarative Pipeline that runs on a Jenkins agent with the Node.js tool configured as `NodeJS` and Docker available. It runs these stages:

1. **Checkout** — checks out the repository source.
2. **Install Dependencies** — prints the Node.js and npm versions and runs `npm ci`.
3. **Test** — runs `npm test`.
4. **Build** — builds the Docker image as `nodejs-demo-app:latest`.

The recorded Jenkins build completed successfully:

- Jenkins build: **#5** (`SUCCESS`)
- Node.js / npm: **v26.13.0 / 11.20.0**
- Tests: **2 passed, 0 failed** (homepage and health API)
- Docker build: **succeeded**, creating the local image `nodejs-demo-app:latest`

This pipeline currently builds the image on the Jenkins agent; it does not push the image to a registry or deploy the application. To publish or deploy it, configure the appropriate registry credentials and add those steps to the pipeline.

## Requirements

- Node.js and npm, or Docker
- For the Jenkins pipeline: Jenkins with the NodeJS tool configured as `NodeJS`, plus Docker installed and available to the agent

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
docker build -t nodejs-demo-app:latest .
docker run --rm -p 3000:3000 nodejs-demo-app:latest
```

Then visit <http://localhost:3000/> or <http://localhost:3000/health>.

The Docker Hub screenshot shows the image repository `abhinaylone/nodejs-demo-app`. To pull its latest image (if you have access), use:

```bash
docker pull abhinaylone/nodejs-demo-app:latest
docker run --rm -p 3000:3000 abhinaylone/nodejs-demo-app:latest
```
