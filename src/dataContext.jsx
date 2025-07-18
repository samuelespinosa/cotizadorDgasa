import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://clientes.atmagenciadigital.com/dgasa/wp-json/custom/v1/wpdata")
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  return useContext(DataContext);
};

export { DataContextProvider, useDataContext };