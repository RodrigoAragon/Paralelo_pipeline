pipeline {
    agent any
 
    //tools {nodejs "node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/RodrigoAragon/Paralelo_pipeline'
                        bat 'npm install cypress'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key edc44101-c378-49f5-9379-6d378cb7fea3 --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/RodrigoAragon/Paralelo_pipeline'
                        bat 'npm install cypress'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key edc44101-c378-49f5-9379-6d378cb7fea3 --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/RodrigoAragon/Paralelo_pipeline'
                        bat 'npm install cypress'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key edc44101-c378-49f5-9379-6d378cb7fea3 --parallel'
                    
                    }
                }
 
                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/RodrigoAragon/Paralelo_pipeline'
                        bat 'npm install cypress'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key edc44101-c378-49f5-9379-6d378cb7fea3 --parallel'
                    
                    }
                }
 
               
 
                
   
                  
            }
 
             
        }
 
    }
            
}