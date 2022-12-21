import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts Clone Made By -{" "}
        <a href="https://www.linkedin.com/in/abhishek-thakur-234b49150" target="_blank" rel="noreferrer">
          Abhishek Thakur
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/the_abhishekthakur/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-thakur-234b49150" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/TheAbhishekThakur" target="_blank" rel="noreferrer">
          <InsertLinkIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
