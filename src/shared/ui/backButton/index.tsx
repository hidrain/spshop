import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './style'

type Props = {}

const BackButton = (props: Props) => {
    return (
        <Link to='/'>
            <Button>
                Back in catalog
            </Button>
        </Link>
    )
}

export default BackButton