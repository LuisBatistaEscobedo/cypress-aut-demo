/********************************************************/
/******************** Locators **************************/
/********************************************************/
const locators = {
    //Buttons
    continueButton: () => cy.get('button[type=submit]:contains("continue")', {timeout: 120000}),
    tryOutButton: () => cy.get('button.try-out__btn', { timeout: 120000 }),
    executeButton: () => cy.get('button.execute', { timeout: 120000 }),

    // Inputs
    lastNameInput: () => cy.get('input[id=lastName]', { timeout:120000}),

    // Elements
    apiSectionElement: (selector) => cy.get('div[id='+selector+']', { timeout: 120000 }),

    //Text
    pageTitleText: (title) => cy.get('h2.title').contains(title, { timeout: 120000 }),

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

    
    // Menu

    clickOnApiElement(element) {
        locators
            .navBarElement(element)
            .click({force: true});
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