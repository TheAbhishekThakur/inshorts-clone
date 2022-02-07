import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts Clone Made By -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="_blank">
          Abhishek Thakur
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/roadsidecoder/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://www.instagram.com/roadsidecoder/" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/roadsidecoder/" target="_blank">
          <InsertLinkIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
