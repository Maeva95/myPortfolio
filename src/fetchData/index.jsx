
// SI on utilise le contexte:
// import  { 
//     useState, 
//     useEffect, 
//     createContext, 
//     useCallback, 
//     useContext 
// } from 'react'
// import PropTypes from 'prop-types'

// const DataContext = createContext({})
// export const api = {
//     loadData: async () => {
//         const response = await fetch("/data/project.json")
//         return response.json()
//     }
// }

// export const DataProvider = ({ children }) => {
//     const [error, setError] = useState(null)
//     const [data, setData] = useState()
//     const getData = useCallback(
//         async () => {
//             try {
//                 const response = await api.loadData()
//                 if (!response.ok) {
//                     throw new Error(`Erreur HHTP! Statut: ${response.status}`);
//                 }
//                 const resData = await response.json()
//                 setData(resData)
//             } catch (err) {
//                 setError(err)
//             }
//         }, []
//     )

//     useEffect(() => {
//         if (data || error) return
//         getData()
//     }, [data, error, getData])

//     return (
//         <DataContext.Provider 
//             value={{ data, error }}
//         >
//             {children}
//         </DataContext.Provider>
//     )
// }

// DataProvider.propTypes = {
//     children: PropTypes.node.isRequired
// }
// export const useData = () => {
//     const {data, error} = useContext(DataContext)
//     if (error) {
//         throw error
//     }
//     return data
// }
// export default DataContext