import { CommonPage } from '../pages/CommonPage';
import { faker } from '@faker-js/faker';

const commonPage = new CommonPage();
const path = './cypress/fixtures/items.json';

/**
 * @module CommonActions
 */

/**
 * App Actions for CommonFlows
 * 
 */

export class CommonPageAppActions {
    /**
     * 
     * @description Landing page and common actions for any user from the Swagger Petstore
     * 
     */

    getDataFromListAndValidateOnUI(){
        cy.getList(path);
        commonPage.verifyDeviceList();
        commonPage.cleanJsonFile();
    }

    addNewDeviceAndValidateOnUI(){
        commonPage.addNewDeviceOnUI();
        commonPage.verifyDevice();
        commonPage.cleanJsonFile();
    }

    updateDevice(){
        cy.getList(path);
        commonPage.updateFirstDevice();
        commonPage.verifyFirstDeviceNameChange();
        commonPage.cleanJsonFile();

    }

    deleteDevice(){
        cy.getList(path);
        commonPage.deleteLastDevice();
        commonPage.verifyLastDeviceNameDeleted();
        commonPage.cleanJsonFile();
    }

}