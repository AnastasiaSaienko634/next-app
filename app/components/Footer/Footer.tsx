import css from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <h3 className={css.logo}>NoteHub</h3>
        <p className={css.description}>
          NoteHub is your modern platform to create, organize, and manage notes
          with ease. Built in 2025 to make productivity simple and beautiful.
        </p>

        {/* 🔹 Social Media Icons */}
        <div className={css.socials}>
          <a
            href="https://github.com/AnastasiaSaienko634"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/saienkoanastasia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={css.bottom}>
        <p>© 2025 NoteHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
