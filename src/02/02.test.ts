import {LocalCityType} from "./02-types";

let city: LocalCityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 1900,
                repaired: true,
                address: {
                    number: 33,
                    street: {
                        title: 'Washington st.'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 1223599,
                staffCount: 403,
                address: {
                    number: 221,
                    street: {
                        title: 'Westside st.'
                    }
                }

            },
            {
                type: 'FIRE-STATION',
                budget: 640250,
                staffCount: 88,
                address: {
                    number: 113,
                    street: {
                        title: 'Central Park'
                    }
                }

            },
        ],
        citizensNumber: 1000000
    }
})

test('should contain contains 1 houses', () => {
    expect(city.houses.length).toBe(1);

    expect(city.houses[0].builtAt).toBe(1900);
    expect(city.houses[0].repaired).toBe(true);
    expect(city.houses[0].address.number).toBe(33);
    expect(city.houses[0].address.street.title).toBe('Washington st.');


})

test('should contain hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL');
    expect(city.governmentBuildings[0].budget).toBe(1223599);
    expect(city.governmentBuildings[0].staffCount).toBe(403);
    expect(city.governmentBuildings[0].address.street.title).toBe('Westside st.');

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION');
    expect(city.governmentBuildings[1].budget).toBe(640250);
    expect(city.governmentBuildings[1].staffCount).toBe(88);
    expect(city.governmentBuildings[1].address.street.title).toBe('Central Park');


})