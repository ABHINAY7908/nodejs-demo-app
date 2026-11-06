
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    // Check GitHub for new commits every minute.
    triggers {
        pollSCM('H/1 * * * *')
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading project from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies'
                sh 'node --version'
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'
                sh """
                    docker build \
                    -t nodejs-demo-app:${BUILD_NUMBER} \
                    -t nodejs-demo-app:latest .
                """
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application using Docker'

                sh '''
                    docker rm -f nodejs-container || true

                    docker run -d \
                    --name nodejs-container \
                    --restart unless-stopped \
                    -p 3000:3000 \
                    nodejs-demo-app:${BUILD_NUMBER}

                    sleep 3
                    curl -f http://localhost:3000/
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Application deployed successfully!'
        }

        failure {
            echo 'FAILED: Check Jenkins Console Output.'
        }
    }
}
