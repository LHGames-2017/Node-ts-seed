node {
    stage('Clone repository') {
        checkout scm
    }
    
    stage('Initialize'){
        def dockerHome = tool 'docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage('Build image') {
        sh 'docker build -t gcr.io/lhgames-2017/test-node-ts:$BUILD_NUMBER .'
    }

    stage('Push image') {
        sh 'docker push gcr.io/lhgames-2017/test-node-ts:$BUILD_NUMBER'
    }
}
