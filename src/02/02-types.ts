export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
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