import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return <nav>
    <div>
        <Link href="/">
            <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
    </div>
    <div>
        <p className="text-default-text">aghp81@gmail.com</p>
    </div>
  </nav>;
}

export default Nav