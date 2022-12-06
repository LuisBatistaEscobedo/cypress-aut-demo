import { CommonPage } from '../pages/CommonPage';
import { faker } from '@faker-js/faker';

const commonPage = new CommonPage();

/**
 * @module CommonPageAppActions
 */

/**
 * App Actions for Swagger Petstore
 * 
 */

export class CommonPageAppActions {
    /**
     * 
     * @description Landing page and common actions for any user from the Swagger Petstore
     * 
     */

    loginUser(){
        commonPage.clickOnLogin();
        commonPage.verifyPageTitle('Authentication');
        commonPage.enterLoginInputs('testaddress@address.com','asd123');
        commonPage.verifyPageTitle('My account');
    }

    logoutUser(){
        commonPage.clickOnLogout();
        commonPage.verifyPageTitle('Authentication');
    }

    shoppingCartFlow(){
        commonPage.headerElementHoover('Women');
        commonPage.headerSubElementClick('T-shirts');
        commonPage.addItemToCart();
        commonPage.headerElementHoover('Dresses');
        commonPage.headerSecondSubElementHoover('Casual Dresses');
        commonPage.addItemToCart();
        commonPage.eraseShoppingCart();
        commonPage.cleanJsonFile();

    }

    

   


}