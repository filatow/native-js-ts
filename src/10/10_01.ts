export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house: number
  }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {
  books: Array<string>
}

type CompanyType = {
  id: number
  title: string
}

export type WithCompaniesType = {
  companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
  return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, city: string): UserWithLaptopType {
  return {...u, address: {...u.address, city}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptopName: string) {
  return {...u, laptop: {...u.laptop, title: laptopName}}
}

export function moveUserToAnotherHouse(
  u: UserWithLaptopType & UserWithBooksType,
  house: number
): UserWithLaptopType & UserWithBooksType {
  return {...u, address: {...u.address, house}}
}

export function addNewBooks(
  u: UserWithLaptopType & UserWithBooksType,
  newBooks: Array<string>
): UserWithLaptopType & UserWithBooksType {
  return {
    ...u,
    books: [...u.books, ...newBooks]
  }
}

export function updateBookName(
  u: UserWithLaptopType & UserWithBooksType,
  oldBook: string,
  newBook: string
): UserWithLaptopType & UserWithBooksType {
  const updatedBooks = u.books.map(
    book => book === oldBook ? newBook : book
  )
  return {
    ...u,
    books: updatedBooks
  }
}

export function removeBook(
  u: UserWithLaptopType & UserWithBooksType,
  bookToRemove: string,
): UserWithLaptopType & UserWithBooksType {
  const updatedBooks = u.books.filter(
    book => book !== bookToRemove
  )
  return {
    ...u,
    books: updatedBooks
  }
}

export function addNewCompany(
  u: UserWithLaptopType & WithCompaniesType,
  newCompany: CompanyType
): UserWithLaptopType & WithCompaniesType {
  return {
    ...u,
    companies: [...u.companies, newCompany]
  }
}

export function updateCompanyById(
  u: UserWithLaptopType & WithCompaniesType,
  companyId: number,
  newTitle: string
): UserWithLaptopType & WithCompaniesType {
  return {
    ...u,
    companies: u.companies.map(
      c => c.id === companyId
        ? {...c, title: newTitle}
        : c
    )
  }
}

export function updateCompanyTitle(
  companies: {
    [key: string]: Array<CompanyType>
  },
  userName: string,
  companyId: number,
  newTitle: string,
) {
  return {
    ...companies,
    [userName]: companies[userName].map(
      c => c.id === companyId ? {...c, title: newTitle} : c
    )
  }
}