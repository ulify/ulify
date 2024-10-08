import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { CommandShortcut } from '@/components/ui/command';

export const HeaderBar = () => {
  return (
    <div className='flex flex-row h-16 w-full items-center justify-between pr-5 bg-background border-b'>
      <div className='w-12 flex flex-row justify-center items-center'>
        <MagnifyingGlassIcon className='w-5 h-5' />
      </div>
      <input
        placeholder='Hi, Ulify'
        className='w-full h-12 bg-transparent text-2xl font-extralight outline-none font-[Kanit] placeholder-zinc-300'
      />
      <div className='w-12 flex flex-row justify-center items-center'>
        <CommandShortcut>Esc</CommandShortcut>
      </div>
    </div>
  );
};
