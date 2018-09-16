node {
    stage('Initialize'){
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        sh 'docker build -t gcr.io/lhgames-2017/test-node-ts:latest .'
    }

    stage('Push image') {
        sh 'docker push gcr.io/lhgames-2017/test-node-ts:latest'
    }
}
