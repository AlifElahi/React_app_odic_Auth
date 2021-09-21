import React from 'react'
import '../styles/App.scss';

const Home = () => {
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
                Wellcome To Hiveums integration platform.
            </div>
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
                powered by hivecore limited
            </div>
        </main>

    )
}

export default Home
