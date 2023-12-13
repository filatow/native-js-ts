import {LocalCityType, TypeOfGovernmentBuildingType} from './04_02-types';
import {
    demolishHousesOnTheStreet,
    getBuildingsWithStaffCountGreaterThen
} from './04_02';

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

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test('Buildings with correct staff count', () => {
    const expectedBuildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(expectedBuildings.length).toBe(1);
    expect(expectedBuildings[0].type).toBe<TypeOfGovernmentBuildingType>('FIRE-STATION');
})