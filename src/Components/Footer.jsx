import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="">
          <InstagramIcon />
        </a>
        <a href="">
          <FacebookSharpIcon />
        </a>
        <a href="">
          <TwitterIcon />
        </a>
        <a href="">
          <YouTubeIcon />
        </a>
      </div>
      <div className="copyright">
        &copy; Copyright 2023 All Right Reserved. Ading & Hussain
      </div>
    </footer>
  );
}
