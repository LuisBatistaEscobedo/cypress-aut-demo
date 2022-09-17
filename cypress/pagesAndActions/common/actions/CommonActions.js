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

    validatePetApisSection(){
        commonPage.verifyPageTitle('Swagger Petstore - OpenAPI 3.0 1.0.15 OAS3');
        commonPage.useApi('operations-pet-addPet');
        commonPage.verifyResponseCode();
    }


    validateEmailReceived(){
        
        
    }

   


}