import { getSingleNote } from "@/lib/api";
import { FaEdit, FaStickyNote } from "react-icons/fa";
import css from "./NoteDetails.module.css";

type Props = {
  params: { id: string };
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = params;
  const note = await getSingleNote(id);

  const formattedDate = note.updatedAt
    ? `Updated at: ${new Date(note.updatedAt).toLocaleString()}`
    : `Created at: ${new Date(note.createdAt).toLocaleString()}`;

  return (
    <section className={css.details}>
      <div className={css.header}>
        <FaStickyNote className={css.icon} />
        <h2 className={css.noteTitle}>{note.title}</h2>
      </div>

      <p className={css.content}>{note.content}</p>

      <div className={css.footer}>
        <p className={css.date}>{formattedDate}</p>
        <button className={css.button}>
          <FaEdit className={css.btnIcon} /> Edit
        </button>
      </div>
    </section>
  );
};

export default NoteDetails;
