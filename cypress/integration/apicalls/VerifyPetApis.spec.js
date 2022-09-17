/// <reference types="cypress" />

import { CommonPageAppActions } from '../../pagesAndActions/common/actions/CommonActions';

const petApiFlow = new CommonPageAppActions();

describe('As a user with access to the Petstore API Tool', () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');

      })

    afterEach(() => {

        cy.clearCookies();

    })

    it('PetApi: Get pets records by the current status', () => {

        petApiFlow.validatePetApisSection();
  
      })

      

})