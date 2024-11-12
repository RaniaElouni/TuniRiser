import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Dropdown from './ui/Dropdown';


const links = [
  { path: '/', name: 'Home' },
  { path: '/propos', name: 'About' }
 
];

const services = [
  { path: '/media', name: 'Media Services' },
  { path: '/web-dev', name: 'Web Development Services' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={linkStyles}
          onClick={closeSheet}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}

      {/* Services Dropdown */}
      <Dropdown
          fn={closeSheet}

        title="Services"
        options={services}
        buttonStyles="px-4 py-2 text-white  bg-primary  rounded"
        menuStyles="w-44"
        itemStyles="text-gray-700 hover:text-gray-900"
      />
    
         <Link
          href='/contact'
   
          className={linkStyles}
          onClick={closeSheet}
        >
          {'/contact'=== path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId='underline'
              className={`${underlineStyles}`}
            />
          )}
        Contact
        </Link>
    </nav>
  );
};

export default Nav;
