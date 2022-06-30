import footerStyle from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <p className={footerStyle["title"]}>
        Coded by MehmetGzn {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
