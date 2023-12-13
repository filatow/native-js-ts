import {ages, courses, isCheapCourse, isOld} from './04';

test('should take old men older then 90', () => {
    const oldAges = ages.filter(isOld);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take courses cheaper then 160', () => {
    const cheapCourses = courses.filter(isCheapCourse);

    console.log('cheapCourses.length', cheapCourses.length);
    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('REACT');
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sugar', isDone: false},
        {id: 4, title: 'Flavor', isDone: true},
    ]

    const completedTasks = tasks.filter((t) => t.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sugar', isDone: false},
        {id: 4, title: 'Flavor', isDone: true},
    ]

    const uncompletedTasks = tasks.filter((t) => !t.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);
})