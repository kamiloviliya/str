import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import FullRender from './FullRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FullRender/>
  </StrictMode>,
)
