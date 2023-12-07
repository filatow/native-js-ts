import {GovernmentBuildingType, HouseType, LocalCityType, TypeOfGovernmentBuildingType} from "../02/02-types";


export function addMoneyToBudget(
    buildings: Array<GovernmentBuildingType>,
    type: TypeOfGovernmentBuildingType,
    moneyDelta: number
) {
    buildings.forEach((b) => b.type === type && (b.budget += moneyDelta));
}

export function demolishHousesOnTheStreet(city: LocalCityType, streetName: string) {
    city.houses = city.houses.filter((h) => h.address.street.title !== streetName)
}

export function repairHouse(house: HouseType) {
    house.repaired = true;
}

export function hireStaff(building: GovernmentBuildingType, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}

export function fireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export function createGreetingMessage(city: LocalCityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men.`
}