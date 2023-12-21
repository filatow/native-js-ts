import React, {MouseEvent} from 'react';

// const callback = (): number => {
//     alert('hey!');
//     return 12;
// }
//
// window.setTimeout(callback, 1000)

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e)
        console.log('User have been deleted')
    }

    const saveUser = () => {
        alert('User have been saved')
    }

    const onBioChange = () => {
        console.log('Biography was changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <h2>Dimych</h2>
        <textarea
            id={'bio'}
            onChange={onBioChange}
            onBlur={focusLostHandler}
        ></textarea>
        <br/>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}
