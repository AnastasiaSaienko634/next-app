import { fetchNotes, Note } from "@/lib/api";
import NoteList from "../components/NoteList/NoteList";
import { FaStickyNote } from "react-icons/fa";
import css from "./Notes.module.css";
// import { useEffect, useState } from "react";

const Notes = async () => {
  //   const [notes, setNotes] = useState<Note[]>([]);
  //   useEffect(() => {
  //     const makeNotes = async () => {
  //       try {
  //         const response = await fetchNotes();
  //         setNotes(response?.notes || []);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     makeNotes();
  //   }, []);
  const response = await fetchNotes();
  return (
    <section className={css.notesSection}>
      <div className={css.header}>
        <FaStickyNote className={css.icon} />
        <h1>Note List</h1>
      </div>

      {response.notes?.length > 0 ? (
        <NoteList notes={response.notes} />
      ) : (
        <p className={css.empty}>
          No notes yet. Start writing your first one ✨
        </p>
      )}
    </section>
  );
};

export default Notes;
