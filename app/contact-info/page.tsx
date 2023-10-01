import Link from "next/link";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <>
      <h2 id="contact-and-info" className="mb-4">Contact Info</h2>

      <address className=" mb-8">
        Elias Maciel R.<br />
        Google e-mail: <code>eliasmacielr at gmail dot com</code><br />
        UNA institutional e-mail: <code>emaciel at pol dot una dot py</code><br />
        Fernando de la Mora, Central<br />
        Paraguay
      </address>

      <div className="w-fit flex flex-col gap-4 mb-8">
        <Link href="https://www.linkedin.com/in/eliasmacielr/" target="_blank" rel="noreferrer" className="flex flex-row flex-grow-0 gap-4">
          <Image src="/img/LI-In-Bug.png" alt="LinkedIn Logo" width={38} height={32} />
          eliasmacielr
        </Link>
        <Link href="https://github.com/eliasmacielr" target="_blank" rel="noreferrer"  className="flex flex-row gap-4">
          <Image src="/img/GitHub-Mark-32px.png" alt="GitHub Logo" width={32} height={32} />
          eliasmacielr
        </Link>
        <Link href="https://twitter.com/eliasmacielr" target="_blank" rel="noreferrer"  className="flex flex-row gap-4">
          <Image src="/img/Twitter_Social_Icon_Circle_Color.png" alt="Twitter Logo" width={32} height={32} />
          @eliasmacielr
        </Link>
        <Link href="https://www.instagram.com/eliasmacielcc/" target="_blank" rel="noreferrer"  className="flex flex-row gap-4">
          <Image src="/img/Instagram_Glyph_Gradient.png" alt="Instagram Logo"  width={32} height={32} />
          @eliasmacielcc
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100080232595377" target="_blank" rel="noreferrer"  className="flex flex-row gap-4">
          <Image src="/img/f_logo_RGB-Blue_58.png" alt="Facebook Logo" width={32} height={32} />
          100080232595377
        </Link>
      </div>

      <a href="https://data.typeracer.com/pit/profile?user=eliasmacielr&ref=badge"
        target="_top"><img src="https://data.typeracer.com/misc/badge?user=eliasmacielr"
          border="0" alt="TypeRacer.com scorecard for user eliasmacielr"/></a>
    </>
  );
}
