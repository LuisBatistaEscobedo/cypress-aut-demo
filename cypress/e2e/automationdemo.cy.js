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

    it('GoogleSearch: It validates a user can succesfully make a search on Google.', () => {
      cy.visit('https://www.google.com/?gws_rd=ssl');
      
        
      });

    it('ShoppingCart: Fills the shopping cart and the empties it.', () => {
      cy.visit('https://ultimateqa.com/fake-landing-page');
      

      });

    it('ShoppingCart: Fills the shopping cart and the empties it.', () => {
      cy.visit('http://uitestingplayground.com/');

      });

    it.skip('ShoppingCart: Fills the shopping cart and the empties it.', () => {
      cy.visit('https://www.saucedemo.com/');

      });

    it('ShoppingCart: Fills the shopping cart and the empties it.', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
  
      });

    it('ShoppingCart: Fills the shopping cart and the empties it.', () => {
      cy.visit('http://automationpractice.com/');
  
      });

      

})