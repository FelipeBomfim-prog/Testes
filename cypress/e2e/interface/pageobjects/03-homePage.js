import { homeElements } from '../elements/03-homeElements';

export class HomePage {
  visit() {
    cy.visit('/home');
  }

  getMainDiv() {
    return cy.get(homeElements.mainDiv);
  }

  getLocationsList() {
    return cy.get(homeElements.locationsList);
  }

  getTitle() {
    return cy.get(homeElements.title);
  }

  getLocationCards() {
    return cy.get(homeElements.locationCard);
  }

  getLocationLinks() {
    return cy.get(homeElements.locationLink);
  }

  getLocationImages() {
    return cy.get(homeElements.locationImage);
  }

  getLocationNames() {
    return cy.get(homeElements.locationName);
  }

  getLocationAddresses() {
    return cy.get(homeElements.locationAddress);
  }

  getLocationPhones() {
    return cy.get(homeElements.locationPhone);
  }

  getNoRestaurantsMessage() {
    return cy.get(homeElements.noRestaurantsMessage);
  }
}
