import React from 'react'
const AppContext = React.createContext()
export const AppProvider = ({children}) => {
    const[isDialogOpen, setIsDialogOpen] = React.useState(true)
  return (
    <AppContext.Provider value={{isDialogOpen, setIsDialogOpen}}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  const context = React.useContext(AppContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
