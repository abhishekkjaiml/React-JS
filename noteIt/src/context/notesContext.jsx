import { createContext, useContext, useReducer } from "react";
import noteReducer from "../reducers/noteReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
  };

  const [{ title, text, notes }, notesDispatch] = useReducer(
    noteReducer,
    initialState
  );

  return (
    <NotesContext.Provider value={{ title, text, notes, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };