import "cypress-real-events/support";

/********************************************************/
/******************** Locators **************************/
/********************************************************/
const locators = {
    //Buttons
    continueButton: () => cy.get('button[type=submit]:contains("continue")', {timeout: 120000}),
    loginButton: () => cy.get('.login', { timeout: 120000 }),
    logoutButton: () => cy.get('.logout', { timeout: 120000 }),
    signInButton: () => cy.get('#SubmitLogin', { timeout: 120000 }),
    addToCartButton: () => cy.get('div.right-block > div.button-container > a', { timeout: 120000 }).contains('Add to cart'),
    continueShoppingButton: () => cy.get('div.clearfix > div > div.button-container > span', { timeout: 120000 }),
    shoppingCartButton: () => cy.get('div.shopping_cart > a', { timeout: 120000 }),

    // Inputs
    emailInput: () => cy.get('#email', { timeout:120000}),
    passInput: () => cy.get('#passwd', { timeout:120000}),

    // Elements
    apiSectionElement: (selector) => cy.get('div[id='+selector+']', { timeout: 120000 }),
    headerElement: (elementName) => cy.get('ul.sf-menu > li > a[title='+elementName+']', { timeout: 120000 }),
    headerSubElement: (subElement) => cy.get('li.sfHover > ul >li > ul > li > a', { timeout: 120000 }).contains(subElement),
    headerDressesSubElement: (subElement) => cy.get('li.sfHover > ul >li > a', { timeout: 120000 }).contains(subElement),
    itemShopElement: () => cy.get('ul.product_list > li > div.product-container > div.left-block', { timeout: 120000 }),
    shoppingCartElement: () => cy.get('div.shopping_cart', { timeout: 120000 }),
    itemInCartElement: () => cy.get('table.table-bordered > tbody > tr.cart_item > td.cart_delete > div > a > i', { timeout: 120000 }),

    //Text
    pageTitleText: (title) => cy.get('.page-heading').contains(title, { timeout: 120000 }),
    productTitleText: () => cy.get('div.clearfix > div > div.layer_cart_product_info > span.product-name', { timeout: 120000 }),

    // URL
    checkUrl: (url) => cy.url().should('include', url)

};

    // File Path
    const filePath = './cypress/fixtures/data.json';

/******************** End Locators **************************/

export class CommonPage {
    constructor() {
        
    }

    /********************************************************/
    /********************** UI Objects **********************/
    /********************************************************/
    //Text
    
    
/******************** End UI Objects **************************/

    /********************************************************/
    /******************** Interactions **********************/
    /********************************************************/

    //Buttons

    useApi(selector){
        locators
            .apiSectionElement(selector)
            .scrollIntoView()
            .get('button.opblock-summary-control')
            .eq(2)
            .click()
            .wait(3000);

        locators
            .tryOutButton()
            .click()
            .wait(3000);

        locators
            .executeButton()
            .click()
            .wait(3000);        
    }

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

    clickOnLogout(){
        locators
            .logoutButton()
            .click()
            .wait(2000);
    }

    headerElementHoover(element){
        locators
            .headerElement(element)
            .realHover();
    }

    headerElementClick(element){
        locators
            .headerElement(element)
            .click();
    }

    headerSubElementClick(element){
        locators
            .headerSubElement(element)
            .click();
    }

    headerSecondSubElementHoover(element){
        locators
            .headerDressesSubElement(element)
            .click();
    }

    addDataToFile(message){
        cy.readFile(filePath).then(list => {
            let lista = new Array();
            lista.push({ item: message });
            cy.writeFile(filePath, list);
          });
    }

    getItemTitle(){
        locators.productTitleText().invoke('text').then((textValue) => {
            this.addDataToFile(textValue);
        });
    }

    // Shopping Elements

    addItemToCart(){
        locators
            .itemShopElement()
            .eq(0)
            .trigger('mouseover');
        locators
            .addToCartButton()
            .click()
            .wait(4000);
        this.getItemTitle();
        locators
            .continueShoppingButton()
            .click();
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



    // API verification

    verifyResponseCode(){
        /*cy.intercept('GET','/', {
            body: [{
                "createdAt": yesterday,
                "expiresAt": today,
                "apiKeyLast4": "FAKE",
                "id": "hkdsfhklgfskghs"
            }]
        }).wait(2000)*/
        cy.request({
            url: '/api/v3/pet/findByStatus?status=available',
            followRedirect: false, 
          }).then((resp) => {
            // redirect status code is 302
            expect(resp.status).to.eq(200)
          }).wait(3000)

    }

    

    /******************** End Verifications **************************/
}