import { faker } from "@faker-js/faker";
import "cypress-real-events/support";

/********************************************************/
/******************** Locators **************************/
/********************************************************/
const locators = {

    //Buttons
    editButton: () => cy.get('a.device-edit', {timeout: 120000}),
    removeButton: () => cy.get('button.device-remove', {timeout: 120000}),
    addADeviceButton: () => cy.get('a.submitButton', {timeout: 120000}),
    saveButton: () => cy.get('button.submitButton', {timeout: 120000}),

    // Inputs
    deviceNameInput: () => cy.get('input#system_name', { timeout:120000}),
    deviceTypeInput: () => cy.get('select#type', { timeout:120000}),
    deviceHddCapacityInput: () => cy.get('input#hdd_capacity', { timeout:120000}),

    //Text
    deviceNameText: () => cy.get('span.device-name', { timeout: 120000 }),
    deviceTypeText: () => cy.get('span.device-type', { timeout: 120000 }),
    deviceCapacityText: () => cy.get('span.device-capacity', { timeout: 120000 }),
    deviceFormTitleText: () => cy.get('div.device-form', { timeout: 120000 }),

};

    // File Path
    const filePath = './cypress/fixtures/items.json';

    // Variables

    let name = faker.name.firstName();
    let hddNumber = faker.datatype.number({
        'min': 100,
        'max': 500
    });

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

    // Buttons
    
    // Filters

    // Data

    addNewDeviceOnUI(){
        locators.addADeviceButton().click();
        locators.deviceFormTitleText().should('be.visible');
        locators.deviceNameInput().type(name);
        locators.deviceTypeInput().select(0);
        locators.deviceHddCapacityInput().type(hddNumber);

        cy.intercept({ method: 'POST', url: '**/devices' }).as('newDevice');

        locators.saveButton().click();

        cy.wait('@newDevice').then( (req) => {
            cy.writeFile(filePath,req.response.body);
        })

    }

    updateFirstDevice(){

        cy.fixture('items.json').then((device) => {

            cy.log('First Id: ' + device[0].id);

            cy.request({
                method: 'PUT',
                url: `http://localhost:3000/devices/${device[0].id}`,
                body: {
                    system_name: faker.random.word()+' - Testing',
                    type: 'WINDOWS',
                    hdd_capacity: '566'
                 },
              });
            cy.reload().wait(2000);

        });
    }

    deleteLastDevice(){
        cy.fixture('items.json').then((device) => {

            cy.log('Last Id: ' + device[device.length-1].id);

            cy.request({
                method: 'DELETE',
                url: `http://localhost:3000/devices/${device[device.length-1].id}`
              });
            cy.reload().wait(2000);
            
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

    // Device

    verifyDeviceList(){
        cy.fixture('items.json').then((device) => {

            device.forEach(element => {
                locators.deviceNameText().contains(element.system_name).should('be.visible')
                    .parent().parent()
                    .children('div.device-options').children('a.device-edit').should('be.visible')
                    .parent().children('button.device-remove').should('be.visible');
                cy.log('buttons validation');
                locators.deviceTypeText().contains(element.type).should('be.visible');
                locators.deviceCapacityText().contains(element.hdd_capacity).should('be.visible');
            });
        });
    }

    verifyDevice(){
        cy.fixture('items.json').then((device) => {
            locators.deviceNameText().contains(device[0].system_name).should('be.visible');
            locators.deviceTypeText().contains(device[0].type).should('be.visible');
            locators.deviceCapacityText().contains(device[0].hdd_capacity).should('be.visible');
        });
    }

    verifyFirstDeviceNameChange(){
        cy.fixture('items.json').then((device) => {
            locators.deviceNameText().should('not.have.value',device[0].system_name);
        });
    }

    verifyLastDeviceNameDeleted(){
        cy.fixture('items.json').then((device) => {
            locators.deviceNameText().should('not.have.value',device[device.length-1].system_name);
        });
    }

    /******************** End Verifications **************************/
}