node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        sh 'docker build -t lhgames-2017/test-node-ts:latest .'
    }

    stage('Push image') {
        docker.withRegistry('https://gcr.io') {
            app.push("latest");
        }
    }
}
