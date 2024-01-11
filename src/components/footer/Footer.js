const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            &copy;{year} - made with 🖤 createur-design
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
