/// <reference types="cypress" />

import { CommonPageAppActions } from '../pagesAndActions/common/actions/CommonActions';

const common = new CommonPageAppActions();

describe('As registred user I want to be able to navigate and user all the current features from the app', () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
      })

    afterEach(() => {

        cy.clearCookies();

    })

    it.only('LoginUser: It validates a user can succesfully login and logout from a shopping application.', () => {
        cy.visit('https://www.google.com/');
        cy.get('div > input[title=Buscar]', { timeout: 120000 }).type('perritos');
        cy.get('ul > li', { timeout: 120000 }).first().click()
        cy.wait(5000);
        
      });

    it('ShoppingCart: Fills the shopping cart and the empties it.', () => {
      cy.visit('/');
      common.loginUser();
      common.shoppingCartFlow();

      });

    it('ShoppingCart: Fills the shopping cart and the empties it.', () => {


      });

      

})