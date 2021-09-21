import React from 'react'
import { Link } from "react-router-dom";
import '../styles/App.scss';

const Notfound = () => {
    return (
        <main>
            <div
                style={{
                    padding: '24px',
                    textTransform: "uppercase",
                    fontWeight: 'bold',
                    fontSize: 42,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
               OOPs 404 not found.
            </div>
            <Link to="/home">
            <div
                style={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    fontSize: 24,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                Home
            </div>
            </Link>
        </main>

    )
}

export default Notfound
