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

    it('LoginUser: It validates a user can succesfully login and logout from a shopping application.', () => {
        cy.visit('/');
        common.loginUser()
        common.logoutUser()
      })

      

})