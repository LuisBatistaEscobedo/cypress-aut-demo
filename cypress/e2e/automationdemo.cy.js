/// <reference types="cypress" />

import { CommonPageAppActions } from '../pagesAndActions/common/actions/CommonActions';

const common = new CommonPageAppActions();

describe('As registred user I want to be able to navigate and user all the current features from the app', () => {

    beforeEach(() => {

        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('/');

      })

    afterEach(() => {

        cy.clearCookies();

    })

    it('NinjaChallenge: Retrieve full list of devices and validates on UI.', () => {
      
      common.getDataFromListAndValidateOnUI();
        
      });

    it('NinjaChallenge: Create device on the UI and verification.', () => {
      
      common.addNewDeviceAndValidateOnUI();

      });

    it('NinjaChallenge: Renames first devices on the list - API.', () => {

      common.updateDevice();

      });

    it('NinjaChallenge: Delete last element from the List - API.', () => {

      common.deleteDevice();
      
      });
      

})