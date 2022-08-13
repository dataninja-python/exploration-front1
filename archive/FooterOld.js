import React from 'react'
import { useState } from 'react'

const Footer = () => {
    return (
        <Footer>
            <CustomFooter onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        </Footer>
    )
}

// Helper Component
const CustomFooter = ({ onMouseEnter, onMouseLeave }) => {
    const [hover, setHover] = useState(false)

    const trackActions = (e) => {
        e.prevent.Default()
        console.log('footer was interacted with');
    }

    // date calculation for copywrite creation
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear
    const startYear = currentYear - 1
    const copyWriteSymbol = '&copy;'
    const finalFooterText = `{copyWriteSymbol} {startYear.toLocaleString("en-US")} - {currentYear.toLocale("en-US")} | Created By PolyMath Dev Studios`

    // change style when footer is hovered over
    const hoverStyle = 'hoverFooter'
    const normalStyle = 'footer'

    const handleEvent = (e) => {
        console.log(e)
    }

    /*const onMouseEnter = () => {
        setHover = true
    }
    
    const onMouseLeave = () => {
        setHover = false
    }*/

    return (
        <p className={ hover ?  hoverStyle : normalStyle } onMouseEnter={(e) => { handleEvent(e)
        }} onMouseLeave={(e) => { handleEvent(e) }} >
            {finalFooterText}
        </p>
    )
}

// Helper functions

export default Footer