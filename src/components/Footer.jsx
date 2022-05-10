function Footer() {
  return (
    <footer className="page-footer blue darken-1">
      <div className="footer-copyright blue darken-2">
        <div className="container white-text">
          © {new Date().getFullYear()}. Роман Овчаренко
          <a className="white-text right" href="https://github.com/SamePersons">Telegram</a>
          <a className="white-text right" href="https://www.instagram.com/falack123/">Instagram</a>
          {/* <a className="white-text right" href="">Github</a> */}
        </div>
      </div>
    </footer>
  );
}

export { Footer };
