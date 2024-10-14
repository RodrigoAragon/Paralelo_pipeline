const { beforeEach } = require("mocha")

describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('https://the-internet.herokuapp.com/login')
  })


  it('log', () => {

    cy.log('Esto es una demo')
  })

  it('Escribir en los campos',()=>{

    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
  })

})