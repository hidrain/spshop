import React, { ReactElement } from 'react'
import { Button } from './style'

type Props = {
    children: ReactElement,
    count: number,
}

const SvgButton = ({ children, count }: Props) => {
    return (
        <Button disabled={count === 1}>
            {children}
        </Button>
    )
}

export default SvgButton