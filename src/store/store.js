import { createContext, useContext, useState, useMemo } from 'react';

export const VotesContext = createContext();

export const ContextProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
    candidato4: 0,
    totalVotes: 0,
  });

  return(
    <VotesContext.Provider
      value = {{
        votes,
        setVotes
      }}
    >
      {children}
    </VotesContext.Provider>
  )
}

export const useVotesContext = () =>{
  const context = useContext(VotesContext);
  return context;
}
