node {
    def app
    
    stage('Initialize'){	
        env.PATH = "/usr/bin:${env.PATH}"	
    }

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        sh '/usr/bin/docker build -t lhgames-2017/test-node-ts:latest .'
    }

    stage('Push image') {
        docker.withRegistry('https://gcr.io') {
            app.push("latest");
        }
    }
}
