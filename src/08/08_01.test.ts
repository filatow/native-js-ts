import {UsersType} from './08_01'

let users: UsersType;

// const user = {id: 100500, name: 'Igor'}
// users[user.id] = user;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '3232312': {id: 3232312, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test("should update corresponding user", () => {
    users[1].name = 'Ekaterina';

    expect(users[1]).toStrictEqual({id: 1, name: 'Ekaterina'});
})

test("should delete corresponding user", () => {
    expect(users[101]).toStrictEqual({id: 101, name: 'Dimych'});

    delete users[101];

    expect(users[101]).toBeUndefined();
})