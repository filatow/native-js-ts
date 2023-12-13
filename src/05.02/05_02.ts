import {GovernmentBuildingType, HouseType} from './05_02-types';

export const getStreetNamesOfGovernmentBuildings = (
    buildings: Array<GovernmentBuildingType>
): Array<string> => buildings.map((b) => b.address.street.title);


export const getStreetNamesOfHouses = (
    houses: Array<HouseType>
): Array<string> => houses.map((h) => h.address.street.title);

export const createMessages = (houses: Array<HouseType>): Array<string> => {
    return houses.map((h) => `Hello guys from ${h.address.street.title}`)
}