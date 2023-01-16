import MainLayout from "../components/MainLayout";

export default function ContactInfo() {
  return (
    <MainLayout>
      <h2>Contact Information</h2>

      <address>
        Elias Maciel R.<br />
        Google e-mail: <code>eliasmacielr at gmail dot com</code><br />
        UNA institutional e-mail: <code>emaciel at pol dot una dot py</code><br />
        Fernando de la Mora, Central<br />
        Paraguay
      </address>
      <br />
      <a href="https://www.linkedin.com/in/eliasmacielr/" target="_blank">
        <img src="img/LI-In-Bug.png" alt="LinkedIn Logo" style={{ height: '32px' }}/>
      </a>
      <a href="https://github.com/eliasmacielr" target="_blank">
        <img src="img/GitHub-Mark-32px.png" alt="GitHub Logo" style={{ height: '32px', width: '32px' }}/>
      </a>
      <a href="https://twitter.com/eliasmacielr" target="_blank">
        <img src="img/Twitter_Social_Icon_Circle_Color.png" alt="Twitter Logo" style={{ height: '32px', width: '32px' }}/>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100080232595377" target="_blank">
        <img src="img/f_logo_RGB-Blue_58.png" alt="Facebook Logo" style={{ height: '32px', width: '32px' }}/>
      </a>
      <a href="https://www.instagram.com/eliasmacielcc/" target="_blank">
        <img src="img/Instagram_Glyph_Gradient.png" alt="Instagram Logo" style={{ height: '32px', width: '32px' }}/>
      </a>
      <br/><br/>
      <a href="https://data.typeracer.com/pit/profile?user=eliasmacielr&ref=badge"
        target="_top"><img src="https://data.typeracer.com/misc/badge?user=eliasmacielr"
          border="0" alt="TypeRacer.com scorecard for user eliasmacielr"/></a>
    </MainLayout>
  );
}
