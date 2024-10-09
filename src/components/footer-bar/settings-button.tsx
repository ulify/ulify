import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Half2Icon } from '@radix-ui/react-icons';
import { useTheme } from '@/components/provider/theme-provider';

export const SettingsButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='gap-2'>
          <Half2Icon className='h-4 w-4' />
          <span className='text-sm font-medium'>设置</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>外观</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value='system'>跟随系统</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='light'>浅色</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='dark'>深色</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
