import React from 'react'

const Footer = () => {
    return (
        <Footer>
            <CustomFooter />
        </Footer>
    )
}

// Helper Component
const CustomFooter = () => {
    // date calculation for copywrite creation
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear
    const startYear = currentYear - 1
    const copyWriteSymbol = '&copy;'
    const finalFooterText = `${copyWriteSymbol} ${startYear.toLocaleString("en-US")} - ${currentYear.toLocale("en-US")} | Created By PolyMath Dev Studios`
    return (
        <p className='footer'>{finalFooterText}</p>
    )
}

// Helper functions

export default Footer