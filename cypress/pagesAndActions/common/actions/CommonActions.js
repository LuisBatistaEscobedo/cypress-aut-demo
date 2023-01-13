import { CommonPage } from '../pages/CommonPage';
import { faker } from '@faker-js/faker';

const commonPage = new CommonPage();

/**
 * @module CommonPageAppActions
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

    googleSearch(){
        
    }

    logoutUser(){
        commonPage.clickOnLogout();
        commonPage.verifyPageTitle('Authentication');
    }


}