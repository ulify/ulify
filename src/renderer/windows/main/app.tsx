import { Button, ButtonGroup, Input } from '@material-tailwind/react';
import React from 'react';

export const App = () => {
  return (
    <div>
      <span>Hello world!</span>
      <Input
        type='email'
        placeholder='Email Address'
        className='!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
        labelProps={{
          className: 'hidden'
        }}
        containerProps={{ className: 'min-w-[100px]' }}
      />
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Button>Button</Button>;
    </div>
  );
};
