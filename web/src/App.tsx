import React, { useEffect } from 'react'

export default function App() {
    const [text, setText] = React.useState('')
    useEffect(() => {
        fetch('/api')
            .then((res) => res.json() as Promise<string>)
            .then((data) => {
                setText(data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}
