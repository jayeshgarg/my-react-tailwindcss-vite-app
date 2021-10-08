import React from 'react';

class TextFormatter {
    static formatCurrency(text, symbol) {
        const options = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        };
        return symbol + ' ' + Number(text).toLocaleString('en', options)
    }

    static formatInteger(text) {
        const options = {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        };
        return Number(text).toLocaleString('en', options)
    }

    static formatDecimal(text, precision) {
        const options = {
            minimumFractionDigits: precision,
            maximumFractionDigits: precision
        };
        return Number(text).toLocaleString('en', options)
    }

}

export default TextFormatter;
