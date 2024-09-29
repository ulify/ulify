import {
  Avatar,
  Button,
  ButtonGroup, IconButton,
  Input,
  List,
  ListItem,
  ListItemPrefix, ListItemSuffix,
  Typography
} from '@material-tailwind/react';
import React from 'react';


function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

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
      <Button>Button</Button>
      <List>
        <ListItem className='px-1.5 py-1'>
          <ListItemPrefix>
            <Avatar
              variant='circular'
              alt='candice'
              src='https://docs.material-tailwind.com/img/face-1.jpg'
            />
          </ListItemPrefix>
          <div>
            <Typography variant='h6' color='blue-gray'>
              Tania Andrew
            </Typography>
            <Typography variant='small' color='gray' className='font-normal'>
              Software Engineer @ Material Tailwind
            </Typography>
          </div>
          <ListItemSuffix>
            <IconButton variant='text' color='blue-gray'>
              <TrashIcon />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
      </List>
    </div>
  );
};
