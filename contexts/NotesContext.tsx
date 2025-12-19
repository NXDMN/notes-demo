import { Note } from "@/types/Note";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

type NotesContextType = {
  notes: Note[];
  getNoteById: (id: string) => Note | undefined;
  addNote: (note: Note) => void;
  updateNote: (id: string, data: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  deleteAll: () => void;
  loaded: boolean;
};

const NotesContext = createContext<NotesContextType | null>(null);
const STORAGE_KEY = "NOTES_STORAGE";

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) setNotes(JSON.parse(raw));
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes, loaded]);

  const getNoteById = (id: string) => notes.find((n) => n.id === id);

  const addNote = (note: Note) => setNotes((prev) => [note, ...prev]);

  const updateNote = (id: string, data: Partial<Note>) =>
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, ...data, updatedAt: Date.now() } : n
      )
    );

  const deleteNote = (id: string) =>
    setNotes((prev) => prev.filter((n) => n.id !== id));

  const deleteAll = () => setNotes([]);

  return (
    <NotesContext
      value={{
        notes,
        getNoteById,
        addNote,
        updateNote,
        deleteNote,
        deleteAll,
        loaded,
      }}
    >
      {children}
    </NotesContext>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used inside NotesProvider");
  return ctx;
}
