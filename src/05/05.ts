export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
];

const dimychTransformator = (man: ManType) => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
})

export const createGreetingMessages = (
    people: Array<ManType>
): Array<string> => people.map((man) => {
    const firstName = man.name.split(' ')[0];
    return `Hello, ${firstName}. Welcome to IT-Incubator!`;
})

const developers = people.map(dimychTransformator);