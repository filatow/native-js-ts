import React, {useState} from 'react';

type LessonType = {
    title: string
    name?: string
}

type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {
        model: string
    }
}

function useDimychArrayState(m: string) {
    return [m, function () {}];
}

function useDimychObjectState2(m: string) {
    return {
        message: m,
        setMessage: function () {}
    };
}


export const ManComponent: React.FC<PropsType> = ({title, man, ...props}: PropsType) => {
    // const {title, man} = props;

    const [message, setMessage] = useState<string>("hello");

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <hr/>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}