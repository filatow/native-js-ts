import {
  makeHairstyle,
  moveUser,
  upgradeUserLaptop,
  moveUserToAnotherHouse,
  UserType,
  UserWithBooksType,
  UserWithLaptopType,
  addNewBooks,
  updateBookName,
  removeBook,
  WithCompaniesType,
  addNewCompany,
  updateCompanyById,
  updateCompanyTitle
} from './10_01';

test('reference type test', () => {
  const user: UserType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    }
  }

  const awesomeUser = makeHairstyle(user, 2)

  expect(awesomeUser.hair).toBe(16)
  expect(user.hair).toBe(32)
  expect(awesomeUser.address).toBe(user.address)
})

test('change adress', () => {
  let user: UserWithLaptopType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    }
  }

  const movedUser = moveUser(user, 'Moscow')

  expect(user).not.toBe(movedUser)
  expect(movedUser.address.city).toBe('Moscow')
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {
  let user: UserWithLaptopType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    }
  }

  const userWithUpgradedLaptop = upgradeUserLaptop(user, 'MacBook')

  expect(user).not.toBe(userWithUpgradedLaptop)
  expect(user.address).toBe(userWithUpgradedLaptop.address)
  expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop)
  expect(user.laptop.title).toBe('ZenBook')
  expect(userWithUpgradedLaptop.laptop.title).toBe('MacBook')
})

test('move to another house', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const movedToAnotherHouse = moveUserToAnotherHouse(user, 88)

  expect(user).not.toBe(movedToAnotherHouse)
  expect(user.books).toBe(movedToAnotherHouse.books)
  expect(user.laptop).toBe(movedToAnotherHouse.laptop)
  expect(user.address).not.toBe(movedToAnotherHouse.address)
  expect(user.address.house).toBe(12)
  expect(movedToAnotherHouse.address.house).toBe(88)
})

test('add new books', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = addNewBooks(user, ['ts', 'restAPI'])

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books).toEqual(['css', 'html', 'js', 'react', 'ts', 'restAPI'])
})

test('update js to jsx', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = updateBookName(user, 'js', 'jsx')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('jsx')
})

test('remove js book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = removeBook(user, 'js')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books.length).toBe(3)
  expect(userCopy.books.find(book => book === 'js')).toBeUndefined()
  expect(userCopy.books[2]).toBe('react')
})

test('add new company', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    companies: [
      {id: 1, title: 'Epam'},
      {id: 2, title: 'IT-Incubator'},
    ]
  }

  const userCopy = addNewCompany(user, {id: 3, title: 'Google'})

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(userCopy.companies.length).toBe(3)
  expect(userCopy.companies[2].title).toBe('Google')
})


test('update company title by id', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Dimych',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'ZenBook'
    },
    companies: [
      {id: 1, title: 'Епам'},
      {id: 2, title: 'IT-Incubator'},
    ]
  }

  const userCopy: UserWithLaptopType & WithCompaniesType = updateCompanyById(user, 1, 'Epam')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).toBe(userCopy.address)
  expect(user.companies).not.toBe(userCopy.companies)
  expect(userCopy.companies[0].title).not.toBe('Епам')
  expect(userCopy.companies[0].title).toBe('Epam')
})


test('update company', () => {
  let companies = {
    ['Dimych']: [
      {id: 1, title: 'Епам'},
      {id: 2, title: 'IT-Incubator'},
    ],
    ['Artem']: [
      {id:1, title: 'IT-Incubator'},
    ]
  }

  let companiesCopy = updateCompanyTitle(companies, 'Dimych', 1, 'Epam')

  expect(companies).not.toBe(companiesCopy)
  expect(companies['Dimych']).not.toBe(companiesCopy['Dimych'])
  expect(companies['Artem']).toBe(companiesCopy['Artem'])
  expect(companiesCopy['Dimych'][0].title).not.toBe('Епам')
  expect(companiesCopy['Dimych'][0].title).toBe('Epam')
})
