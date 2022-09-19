/********************************************************/
/******************** Locators **************************/
/********************************************************/
const locators = {
    //Buttons
    continueButton: () => cy.get('button[type=submit]:contains("continue")', {timeout: 120000}),
    loginButton: () => cy.get('.login', { timeout: 120000 }),
    logoutButton: () => cy.get('.logout', { timeout: 120000 }),
    signInButton: () => cy.get('#SubmitLogin', { timeout: 120000 }),

    // Inputs
    emailInput: () => cy.get('#email', { timeout:120000}),
    passInput: () => cy.get('#passwd', { timeout:120000}),

    // Elements
    menuElement: () => cy.get('a.sf-with-ul', { timeout:120000}),
    apiSectionElement: (selector) => cy.get('div[id='+selector+']', { timeout: 120000 }),

    //Text
    pageTitleText: (title) => cy.get('.page-heading').contains(title, { timeout: 120000 }),

    // URL
    checkUrl: (url) => cy.url().should('include', url)

};

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

    clickOnMenuElement(selector, element){
            cy.get('nav').hoverElement(selector,element);
        locators
            .menuElement()
            .contains(element)
            .click()
            .wait(2000);

    }

    /******************** End Interactions **************************/

    /********************************************************/
    /******************** Verifications **********************/
    /********************************************************/

    //Text
    verifyPageTitle(title) {
        locators
            .pageTitleText(title)
            .should('have.text', title)
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