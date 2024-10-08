import { useState } from 'react';
import { cn } from '@/lib/utils';
import { isMacOS } from '@/utils/device';
import { ThemeButton } from '@/components/menu-bar/theme-button';
import { SettingsButton } from '@/components/menu-bar/settings-button';

export const MenuBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={cn(
        'flex flex-col justify-between items-center w-48 h-full bg-background border-b border-b-accent border-opacity-10',
        !isMacOS() ? 'pt-2' : 'pt-10'
      )}
    >
      <div className='w-full h-10 drag'></div>
      <h2 className='text-sm font-medium tracking-wider font-[Kanit]'>Ulify</h2>
      <div className='w-full flex flex-row justify-between items-center px-2 py-2'>
        <ThemeButton />
        <div className='w-6 h-6 bg-accent rounded-full'></div>
      </div>
      <SettingsButton />
    </div>
  );
};
