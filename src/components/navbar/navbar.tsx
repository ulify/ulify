import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@radix-ui/react-toggle-group';
import { ToggleGroupItem } from '@/components/ui/toggle-group';
import { SettingsBar } from '@/components/navbar/settings-bar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { TooltipArrow } from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import { isMacOS } from '@/utils/device';

export const Navbar = () => {
  return (
    <div className={cn('w-16 h-full bg-white dark:bg-black bg-opacity-55 backdrop-filter drag flex flex-col flex-shrink-0',isMacOS() && 'pt-5')}>
      <div className='w-full py-4 flex flex-col items-center justify-center'>
        <Avatar className='w-8 h-8'>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <TooltipProvider delayDuration={300}>
        <ToggleGroup
          type='single'
          className='flex flex-col w-full justify-center items-center gap-2 no-drag'
          defaultValue='search'
          onValueChange={value => {
            console.log(value);
          }}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem
                className='h-11'
                value='search'
                aria-label='search'
              >
                <span className='icon-[teenyicons--search-circle-outline] w-5 h-5' />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent side='right' align='center' alignOffset={33}>
              <span>搜索</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem className='h-11' value='ai' aria-label='ai'>
                <span className='icon-[hugeicons--ai-brain-03] w-5 h-5' />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent side='right' >
              <span>AI对话</span>
            </TooltipContent>
          </Tooltip>
        </ToggleGroup>
      </TooltipProvider>
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
