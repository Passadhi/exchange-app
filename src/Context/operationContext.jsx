import React, { createContext, useState, useContext} from 'react'
import PropTypes from 'prop-types'
import VStyle from 'prop-types'


const operationContext = createContext()

export function OperationContextProvider({ children }) {
    const [operation, setOperation] = useState([])
    return (
        <operationContext.Provider value={{ operation, setOperation }}>
            {children}
        </operationContext.Provider>
    )
}

export const useOperationContext = () => useContext(operationContext)

Text.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function Text({ children }) {
    return (
        <VStyle className="para">
            <p>{children}</p>
        </VStyle>
    );
}
