import React from 'react'
import PageTitle from '../PageTitle';

type Props = {
    headerColor: string
}

const Home: React.FC<Props> = ({
    headerColor
}) => {
    return (
        <PageTitle headerColor={headerColor} title="Ty's Docs" subtitle="The fundamental purpose of this documentation is to document my progress, write down my mistakes, how I've arrived at solutions
              and to document my code. Anybody viewing this can hopefully benefit from the way I've structured this as it's original and fundamental purpose
              is to help 'future me' firstly have a better memory of solutions I've reached and/or understanding of why they worked but also as a place where
              I can reference back to prior solutions I've found." />
    )
}

export default Home
