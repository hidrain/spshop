import React, { ReactNode } from 'react'
import { Button } from './style'

type Props = {
    children: ReactNode,
}

const SvgButton = ({ children }: Props) => {
    return (
        <Button>
            {children}
        </Button>
    )
}

export default SvgButton