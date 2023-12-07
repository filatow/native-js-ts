import {LocalCityType} from "../02/02-types";
import {
    addMoneyToBudget,
    createGreetingMessage,
    demolishHousesOnTheStreet,
    fireStaff,
    hireStaff,
    repairHouse
} from "./03_02";

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
            {
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
                builtAt: 1998,
                repaired: true,
                address: {
                    number: 77,
                    street: {
                        title: 'South street'
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
                staffCount: 100,
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

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings, 'HOSPITAL', 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
    expect(city.governmentBuildings[1].budget).toBe(500000);
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings, 'FIRE-STATION', -100000);

    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('Houses should be destroyed', () => {
    expect(city.houses.length).toBe(3);
    expect(city.houses[1].address.street.title).toBe('Happy street');

    demolishHousesOnTheStreet(city, 'Happy street');
    expect(city.houses.length).toBe(2);
    expect(city.houses[1].address.street.title).not.toBe('Happy street');
})

test('House should be repaired', () => {
    expect(city.houses[1].repaired).toBe(false);

    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBe(true);
})

test('Staff should be increased', () => {
    hireStaff(city.governmentBuildings[0], 50);

    expect(city.governmentBuildings[0].staffCount).toBe(250);
})

test('Staff should be decreased', () => {
    fireStaff(city.governmentBuildings[1], 10);

    expect(city.governmentBuildings[1].staffCount).toBe(90);
})

test('Greeting message should be correct for city', () => {
    const message = createGreetingMessage(city);

    const correctMessage = 'Hello New York citizens. I want you be happy. All 1000000 men.';
    expect(message).toBe(correctMessage);
})