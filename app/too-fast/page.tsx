import React from 'react'

const Page = () => {
    return (
        <main className="root-container flex min-h-screen flex-col items-center justify-center">
            <h1 className="font-bebas-neue text-5xl font-bold text-light-100">Oops! You’re going a bit too fast. We’ve had to slow you down!</h1>
            <p className="mt-3 max-w-xl text-center text-light-400">
                Sorry for the temporary inconvenience, wait one minute and try again.
            </p>
        </main>
    )
}

export default Page