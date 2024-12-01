import {increaseAge, UserType} from './09_01';

test('object reference type test', () => {
  const user: UserType = {
    name: 'Dimych',
    age: 32
  }

  increaseAge(user)

  expect(user['age']).toBe(33)

  const superUser = user
  superUser.age = 1000
  expect(user['age']).toBe(1000)
})

test('array test', () => {
  const users: UserType[] = [
    {
      name: 'Dimych',
      age: 32
    },
    {
      name: 'Victor',
      age: 50
    },
  ]

  const admins = users

  admins.push(
    {
      name: 'Bandos',
      age: 10
    }
  )

  expect(admins[2].age).toBe(10)
})


test('value type test', () => {
  let usersCount = 100
  let adminsCount = usersCount

  adminsCount += 1

  expect(usersCount).toBe(100)
  expect(adminsCount).toBe(101)
})

test('objective property reference type test', () => {
  const address = {
    city: 'Minsk'
  }

  const user: UserType = {
    name: 'Dimych',
    age: 32,
    address
  }

  const user2: UserType = {
    name: 'Natasha',
    age: 30,
    address
  }

  user2.address && (user2.address.city = 'Minsk City')

  expect(user.address?.city).toBe('Minsk City')
  expect(user2.address?.city).toBe('Minsk City')
})


test('objective array elements test', () => {
  const address = {
    city: 'Minsk'
  }

  const user: UserType = {
    name: 'Dimych',
    age: 32,
    address
  }

  const user2: UserType = {
    name: 'Natasha',
    age: 30,
    address
  }

  const users: UserType[] = [user, user2, {name: 'Misha', age: 4, address}]

  const admins = [user, user2]
  admins[0].name = 'Dmitriy'

  expect(users[0].name).toBe('Dmitriy')
  expect(user.name).toBe('Dmitriy')
  expect(admins[0].name).toBe('Dmitriy')
})
