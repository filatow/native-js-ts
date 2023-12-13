import {CourseType} from './04-types';

export const ages = [18, 20, 22, 1, 100, 90, 14];
export const courses: Array<CourseType> = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150},
]

export const isOld = (age: number) => age > 90;
export const isCheapCourse = (course: CourseType) => course.price < 160;
