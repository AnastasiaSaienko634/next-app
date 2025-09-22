import { Note } from "@/lib/api";
import { FaRegStickyNote, FaEdit, FaTrash } from "react-icons/fa";
import css from "./NoteItem.module.css";
import Link from "next/link";

interface NoteItemProps {
  item: Note;
}

const NoteItem = ({ item }: NoteItemProps) => {
  return (
    <li className={css.card}>
      <Link href={`/notes/${item.id}`} className={css.link}>
        Click to see more
        <div className={css.header}>
          <FaRegStickyNote className={css.icon} />
          <h2 className={css.itemtitle}>{item.title}</h2>
        </div>
        {item.content && <p className={css.content}>{item.content}</p>}
        <div className={css.footer}>
          <span className={css.date}>
            {new Date(item.createdAt).toLocaleDateString()}
          </span>
          <div className={css.actions}>
            <button aria-label="Edit note">
              <FaEdit />
            </button>
            <button aria-label="Delete note">
              <FaTrash />
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NoteItem;
