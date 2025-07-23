'use client';

import { useTheme } from '../../app/context/ThemeContext';
import Image from 'next/image';
import t_l from '../../assets/svg/toggle-l.svg';
import t_d from '../../assets/svg/toggle-d.svg';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'light' ? t_d : t_l;

  return (
    <Image
      src={icon}
      alt="Toggle Theme"
      width={40}
      height={40}
      onClick={toggleTheme}
      className='nav-toggle'
      style={{ cursor: 'pointer', margin: '20px' }}
    />
  );
};

export default ThemeToggle;
