#!/usr/bin/env groovy

pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    environment {
        DOCKER_IMAGE = "react-book"
        tag = "${env.BUILD_NUMBER}"
        dockerHubCredential = 'dockerhub'
    }
    stages {
        stage("Checkouts") {
            steps {
                checkout scm
            }
        }
        stage("Build") {
            steps {
                echo "Let's Builds"
                sh 'npm install'
            }
        }
        stage("Test") {
            steps {
                echo "Ot dg test eii te  !!!!"
                // Add testing steps here, e.g., sh 'npm test'
            }
        }
        stage("Build Image") {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${tag}")
                }
            }
        }
        stage("Push Docker Image"){
            steps {
                script {
                    docker.withRegistry('', dockerHubCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage("Deploy") {
            steps {
                script {
                    def containerId = sh(script: 'docker ps -aq -f "name=${DOCKER_IMAGE}"', returnStdout: true).trim()
                    echo "containerID: ${containerId}"
                    if (containerId) {
                        echo "Removing existing container ${containerId}"
                        sh "docker rm -f ${containerId}"
                    } else {
                        echo "No existing container found."
                    }

                    echo "Deploying container..."
                    sh "docker run -d -p 3003:3000 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}:${tag}"

                    echo "List Docker Containers"
                    sh "docker ps | grep ${DOCKER_IMAGE}"
                }
            }
        }
    }
}
