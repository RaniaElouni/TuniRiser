import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { AlignJustify, Link } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';
import { useState } from 'react';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <div className='px-8'>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <AlignJustify className='cursor-pointer' onClick={() => setIsOpen(true)} />
        </SheetTrigger>
        <SheetContent>
          <div className='flex flex-col items-center justify-between h-full py-8'>
            <div className='flex flex-col items-center gap-y-32'>
              <Logo />
              
              {/* Main Navigation Links */}
              <Nav
                containerStyles='flex flex-col items-center gap-y-6'
                linkStyles='text-2xl'
                closeSheet={closeSheet}
              />

            </div>

            {/* Social Icons */}
            <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
