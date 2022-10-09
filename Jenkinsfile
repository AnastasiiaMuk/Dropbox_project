pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                bat "npm update"
            }
        }
        stage('Test') {
            steps {
                bat "npm run test"
            }
        }
    }
}
