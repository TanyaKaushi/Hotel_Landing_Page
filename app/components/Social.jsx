import Link from 'next/link';
import { InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

const Social = ({containerStyles}) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href='/'>
            <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href='/'>
            <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link href='/'>
            <FacebookIcon />
        </Link>
      </li>
    </ul>
  )
}

export default Social
