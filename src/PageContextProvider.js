import React, {useState, createContext} from 'react'

export const contextProvider = createContext()

const PageContextProvider = (props) => {
    const [searchData, setSearchData] = useState('')
    
    return (
        <contextProvider.Provider value={[searchData, setSearchData]}>
            {props.children}
        </contextProvider.Provider>
    )
}

export default PageContextProvider