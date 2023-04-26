import React from 'react'
import { Minus } from 'shared/ui/minus/minus'
import SvgButton from 'shared/ui/svgButton'

type Props = {}

const MinusProduct = (props: Props) => {
    return (
        <SvgButton>
            <Minus />
        </SvgButton>
    )
}

export default MinusProduct