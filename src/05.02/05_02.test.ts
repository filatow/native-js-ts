import {GovernmentBuildingType, LocalCityType} from './05_02-types';
import {createMessages, getStreetNamesOfGovernmentBuildings, getStreetNamesOfHouses} from './05_02';

let city: LocalCityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 1900,
                repaired: true,
                address: {
                    number: 33,
                    street: {
                        title: 'Washington st.'
                    }
                }
            },
            {
                id: 2,
                builtAt: 1940,
                repaired: false,
                address: {
                    number: 68,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                builtAt: 1998,
                repaired: true,
                address: {
                    number: 77,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 221,
                    street: {
                        title: 'Westside st.'
                    }
                }

            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
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

test('list of street names of government buildings', () => {
    const streetsNames: Array<string> = getStreetNamesOfGovernmentBuildings(
       city.governmentBuildings
   );

   expect(streetsNames.length).toBe(2);
   expect(streetsNames[0]).toBe('Westside st.');
   expect(streetsNames[1]).toBe('Central Park');
});

test('list of street names', () => {
    const streetsNames: Array<string> = getStreetNamesOfHouses(
       city.houses
   );

   expect(streetsNames.length).toBe(3);
   expect(streetsNames[0]).toBe('Washington st.');
   expect(streetsNames[1]).toBe('Happy street');
   expect(streetsNames[2]).toBe('Happy street');
});

test('create greeting messages for streets', () => {
    const messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello guys from Washington st.');
    expect(messages[1]).toBe('Hello guys from Happy street');
    expect(messages[2]).toBe('Hello guys from Happy street');
})