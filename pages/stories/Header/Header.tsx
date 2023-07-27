import React from 'react';
// import {FaBars} from 'react-icons/fa'
import Image from 'next/image';

import gorillaworkout from '../../../public/newbggw.png'
type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className="bg-white">
    <div className="storybook-header">
      <div className="flex flex-row items-center">
        {/* <img src={gorillaworkout}  alt="" /> */}
        <Image src={gorillaworkout} className="w-1/2 h-fit" alt="Description of the image" width={164} height={30} />
      </div>
      <div className="flex flex-row gap-x-7  items-center">
        <div className="px-[7px] py-[6px] flex flex-row justify-between items-center">
            <p className="text-[#15b0e1] text-sm ml-7 tracking-[.1.5em]">EN</p>
            <p className="text-[#7d8291] text-sm ml-7 tracking-[.1.5em]">NL</p>
            <p className="text-[#7d8291] text-sm ml-7 tracking-[.1.5em]">IND</p>
        </div>
          <div className="w-[54px] h-[54px]  border border-[#15b0e1] rounded-[4px] ml-4 flex justify-center items-center" >
            {/* <FaBars size={20} color='#15b0e1'/> */}
            <img src="https://d-shore.nl/wp-content/themes/d-shore/assets/images/menu_icon.svg" alt="" />
          </div>
      </div>
    </div>
  </header>
);
