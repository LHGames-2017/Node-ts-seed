node {
    def app
    
    stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        sleep 3000
        app = docker.build("lhgames-2017/test-node-ts:latest")
    }

    stage('Push image') {
        docker.withRegistry('https://gcr.io') {
            app.push("latest");
        }
    }
}
