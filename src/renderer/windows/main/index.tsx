import { createRoot } from 'react-dom/client';
import { App } from '@/windows/main/app';

import '@/design/index.css'

createRoot(document.getElementById('root')!).render(<App />);
