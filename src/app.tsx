import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon
} from '@radix-ui/react-icons';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command';
import { MenuBar } from '@/components/menu-bar/menu-bar';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { HeaderBar } from '@/components/header-bar/header-bar';
import DotPattern from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';


const BasicLayout = () => {
  return (
      <div
        className="relative flex h-full w-full flex-col items-center justify-center ">
        <div className='w-full h-full flex flex-col'>
          <HeaderBar />
          <div className='flex flex-row justify-start items-center px-5 py-4'>
            <Badge variant="secondary">Secondary</Badge>
          </div>
          <div>
            {/*<MenuBar />*/}
          </div>
        </div>
      </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BasicLayout />
    </ThemeProvider>
  );
}
