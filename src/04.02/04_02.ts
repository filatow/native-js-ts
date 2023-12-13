import {GovernmentBuildingType, LocalCityType} from './04_02-types';

export const demolishHousesOnTheStreet = (city: LocalCityType, streetName: string) => {
    city.houses = city.houses.filter((city) => city.address.street.title !== streetName);
}


export const getBuildingsWithStaffCountGreaterThen = (
    buildings: Array<GovernmentBuildingType>,
    staffCount: number
) => buildings.filter((b) => b.staffCount > staffCount)