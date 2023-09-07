// pipeline {
//    agent { docker { image 'mcr.microsoft.com/playwright:v1.37.0-jammy' } }
//    stages {
//       stage('e2e-tests') {
//          steps {
//             sh 'ci'
//             sh 'npx playwright test'
//          }
//       }
//    }
// }

pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    options {
        timeout(time:1, unit: 'HOURS')
    }
    stages {
        stage('Start Docker instance') {
            steps {
                echo '---------Checking docker images-------' 
                docker container ls

                echo '----------- Making Docker instance up ------------'
                docker compose up
            }
        }
        stage('Running Test Cases') {
            steps{
                echo '--------- Running TestCases -----------'
                sh "npm ci" 
                sh "npx playwright test"
                // npm i
                // npm run test
            }
            echo "Running Test Cases"
        }
    }
    post {
        success {
            echo 'Build Passed'
        }
        failure {
            echo 'Build Failed'
        }
    }
}