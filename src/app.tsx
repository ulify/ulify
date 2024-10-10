import { Badge } from '@/components/ui/badge';
import { ThemeProvider } from '@/provider/theme-provider';
import { HeaderBar } from '@/components/header-bar/header-bar';
import { Navbar } from '@/components/navbar/navbar';

const BasicLayout = () => {
  return (
    <div className='relative flex h-full w-full flex-row items-center justify-center bg-gray-100'>
      <Navbar />
      <div className='w-full h-full flex flex-col bg-background'>
        <HeaderBar />
        <div className='flex flex-row justify-start items-center px-5 py-4'>
          <Badge variant='secondary'>Secondary</Badge>
        </div>
        <div className='flex-1'>{/*<MenuBar />*/}</div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BasicLayout />
    </ThemeProvider>
  );
}
