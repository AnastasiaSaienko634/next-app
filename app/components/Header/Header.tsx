import { getCategories } from "@/lib/api";
import css from "./Header.module.css";
import Link from "next/link";
import { lightningCssTransform } from "next/dist/build/swc/generated-native";

const Header = async () => {
  const categories = await getCategories();
  return (
    <header className={css.header}>
      <Link href="/" arial-label="Home">
        NoteHub
      </Link>
      <nav>
        <ul className={css.navigation}>
          <Link href="/">Home</Link>
          <ul>
            <li>
              <Link href="/notes/filter/all">Notes</Link>
            </li>
            {categories.map((categorie) => (
              <li key={categorie.key}>
                <Link href={`/notes/filter/${categorie.id}`}></Link>
              </li>
            ))}
          </ul>

          <Link href="/profile">Profile</Link>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
