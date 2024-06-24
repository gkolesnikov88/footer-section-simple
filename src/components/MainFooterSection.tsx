import "./_mainFooterSection.css";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiGithubLine,
  RiTwitterXLine
} from "@remixicon/react";

const MainFooterSection = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <section className="footer-section">
      <footer className="footer-main">
        <div className="footer-main__content">
          <nav
            className="footer-main__content__items"
            aria-label="main footer navigation"
          >
            <a className="link" href="/">
              Features
            </a>
            <a className="link" href="/">
              Pricing
            </a>
            <a className="link" href="/">
              About us
            </a>
            <a className="link" href="/">
              Contact
            </a>
          </nav>
          <div className="footer-main__content__items footer-main__content__items--icons">
            <a className="link link_type_footer" href="/" aria-label="Youtube">
              <RiYoutubeLine size={24} />
            </a>
            <a className="link link_type_footer" href="/" aria-label="Instagram">
              <RiInstagramLine size={24} />
            </a>
            <a className="link link_type_footer" href="/" aria-label="Facebook">
              <RiFacebookBoxLine size={24} />
            </a>
            <a className="link link_type_footer" href="/" aria-label="Github">
              <RiGithubLine size={24} />
            </a>
            <a className="link link_type_footer" href="/" aria-label="Twitter X">
              <RiTwitterXLine size={24} />
            </a>
          </div>
        </div>
        <p className="copyright">
          &copy; <span>{copyrightYear}</span> Abstractly, Inc. All rights
          reserved.
        </p>
      </footer>
    </section>
  );
};

export default MainFooterSection;
