import { Button } from '@/components/ui/button';
import { SettingsBar } from '@/components/navbar/settings-bar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { isMacOS } from '@/utils/device';
import { useState } from 'react';

export type ActionType = 'search' | 'ai';

export const Navbar = () => {
  const [actionType, setActionType] = useState<ActionType>('search');
  return (
    <div
      className={cn(
        'w-16 h-full bg-background/95 backdrop-filter drag flex flex-col flex-shrink-0',
        isMacOS() && 'pt-5'
      )}
    >
      <div className='w-full py-4 flex flex-col items-center justify-center'>
        <Avatar className='w-8 h-8'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center no-drag'>
        <div
          className={cn(
            'w-11 h-11 flex flex-row justify-center items-center rounded cursor-pointer transition-all text-muted-foreground/70 hover:bg-muted hover:text-foreground',
            actionType === 'search' && 'bg-muted text-foreground'
          )}
          onClick={() => setActionType('search')}
        >
          <span className='icon-[icon-park-outline--search] w-5 h-5' />
        </div>
        <div
          className={cn(
            'w-11 h-11 flex flex-row justify-center items-center rounded cursor-pointer transition-all text-muted-foreground/70 hover:bg-muted hover:text-foreground',
            actionType === 'ai' && 'bg-muted text-foreground'
          )}
          onClick={() => setActionType('ai')}
        >
          <span className='icon-[hugeicons--ai-brain-03] w-5 h-5' />
        </div>
      </div>

      <div className='flex-1'></div>
      <div className='flex flex-col gap-2 justify-center items-center pb-4'>
        <SettingsBar />
        <Button variant='ghost' className='w-11 h-11 p-0 no-drag'>
          <span className='icon-[hugeicons--user-circle] w-5 h-5' />
        </Button>
      </div>
    </div>
  );
};
