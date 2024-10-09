import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SettingsButton } from '@/components/footer-bar/settings-button';

export const FooterBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={cn(
        'w-full h-12 px-2 flex flex-row justify-between items-center bg-gray-100 bg-opacity-15 backdrop-filter',
      )}
    >
      <SettingsButton />
      <div>提示</div>
    </div>
  );
};
