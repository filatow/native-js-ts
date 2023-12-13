export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id: number
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type TypeOfGovernmentBuildingType = 'HOSPITAL' | 'FIRE-STATION'

export type GovernmentBuildingType = {
    type: TypeOfGovernmentBuildingType
    budget: number
    staffCount: number
    address: AddressType
}

export type LocalCityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}