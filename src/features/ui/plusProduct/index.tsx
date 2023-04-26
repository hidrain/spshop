import React from 'react'
import { Plus } from 'shared/ui/plus/plus'
import SvgButton from 'shared/ui/svgButton'

type Props = {}

const PlusProduct = (props: Props) => {
    return (
        <SvgButton>
            <Plus />
        </SvgButton>
    )
}

export default PlusProduct