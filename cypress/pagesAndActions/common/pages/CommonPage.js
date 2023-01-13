import "cypress-real-events/support";

/********************************************************/
/******************** Locators **************************/
/********************************************************/
const locators = {
    //Buttons
    continueButton: () => cy.get('input[type=submit]:contains("Buscar con Google")', {timeout: 120000}),

    // Inputs
    searchInput: () => cy.get('input[title=Buscar]', { timeout:120000}),

    // Elements
    apiSectionElement: (selector) => cy.get('div[id='+selector+']', { timeout: 120000 }),

    //Text
    pageTitleText: (title) => cy.get('.page-heading').contains(title, { timeout: 120000 }),

    // URL
    checkUrl: (url) => cy.url().should('include', url)

};

    // File Path
    const filePath = './cypress/fixtures/data.json';

/******************** End Locators **************************/

export class CommonPage {

    /********************************************************/
    /********************** UI Objects **********************/
    /********************************************************/
    //Text
    
    
/******************** End UI Objects **************************/

    /********************************************************/
    /******************** Interactions **********************/
    /********************************************************/

    //Buttons


    // Inputs

    enterLoginInputs(userName,userPass){
        locators
            .emailInput()
            .type(userName);
        locators
            .passInput()
            .type(userPass);
        locators
            .signInButton()
            .click()
            .wait(2000);
    }
    
    // Menu

    clickOnLogin(){
        locators
            .loginButton()
            .click()
            .wait(2000);
    }

    headerSubElementClick(element){
        locators
            .headerSubElement(element)
            .click();
    }

    addDataToFile(message){
        cy.readFile(filePath).then(list => {
            let lista = new Array();
            lista.push({ item: message });
            cy.writeFile(filePath, list);
          });
    }

    // Erase Shopping cart elements

    eraseShoppingCart(){
        locators
            .shoppingCartButton()
            .should('be.visible')
            .click();
        this.verifyPageTitle('Shopping-cart summary');
        locators.itemInCartElement().then(($items) => { 
            if($items.length() > 0){
                locators.itemInCartElement().click();
            } else {
                cy.log('no elements on the Cart');
            }
        });

    }

    cleanJsonFile(){
        cy.writeFile(filePath, {
            dataTitle: []
        });
    }

    /******************** End Interactions **************************/

    /********************************************************/
    /******************** Verifications **********************/
    /********************************************************/

    //Text
    verifyPageTitle(title) {
        locators
            .pageTitleText(title)
            .should('include.text', title)
            .wait(2000);

    }
   

    /******************** End Verifications **************************/
}