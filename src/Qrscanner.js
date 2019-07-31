import React, { Component, useState } from 'react'

export default function Test(props) {
    console.log(useState('test'))
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState({ name: 'tom', age: 12 })
    React.useEffect(() => {
        // setTimeout(() => {
            setName()
        // }, 3000)
    }, [user.age])
    function setName() {
        setUser({ ...user, name: Date.now() })
    }
    return (
        <div>
            <h1>{counter}</h1>
            <p>{user.name} - {user.age}</p>
            <button onClick={setName}>change name</button>
            <button onClick={() => setUser({ ...user, age: 34 })}>change age</button>
        </div>
    )
}



