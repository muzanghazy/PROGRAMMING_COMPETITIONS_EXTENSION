import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import './popup.css'
const App: React.FC<{}> = () => {
  return <div>app</div>
}

document.body.innerHTML = '<div id="popup"></div>'

const root = createRoot(document.getElementById('popup'))
root.render(<App />)
