node('master') {
    env.NODEJS_HOME = "${tool 'Node 8.x'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

    currentBuild.result = "SUCCESS"
    stage('Checkout'){
      checkout scm
    }

    stage('Test'){
     env.NODE_ENV = "test"

     print "Environment will be : ${env.NODE_ENV}"

     sh 'node -v'
     sh 'npm prune'
     sh 'npm install'
    }
}
