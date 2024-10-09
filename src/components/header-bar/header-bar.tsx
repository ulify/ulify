import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { CommandShortcut } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';

export const HeaderBar = () => {
  return (
    <div className='flex flex-row h-14 w-full gap-2 px-4 items-center justify-between bg-gray-50 bg-opacity-15 backdrop-filter border-b border-opacity-15 border-b-gray-100'>
      <div className='flex flex-row justify-center items-center'>
        <MagnifyingGlassIcon className='w-6 h-6 opacity-45' />
      </div>
      <input
        placeholder='Hi, Ulify'
        className='w-full h-12 bg-transparent text-xl font-extralight outline-none font-[Kanit] placeholder-zinc-300'
      />
      <div className='w-12 flex flex-row justify-center items-center'>
        <Badge variant='secondary' className='text-gray-400 font-light'>Esc</Badge>
      </div>
    </div>
  );
};
