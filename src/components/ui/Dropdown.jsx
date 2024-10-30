// Import necessary packages
import { Menu } from '@headlessui/react';
import Link from 'next/link';

const Dropdown = ({ title, options, buttonStyles, menuStyles, itemStyles,fn }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={`${buttonStyles}`}>
        {title}
      </Menu.Button>

      <Menu.Items className={`${menuStyles} absolute mt-2 bg-white shadow-lg rounded`}>
        {options.map((option, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <Link
                href={option.path}
                className={`${itemStyles} block px-4 py-2 ${active ? 'bg-orange-100' : ''}`}
                onClick={fn}
              >
                {option.name}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
