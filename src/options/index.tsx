import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

const App: React.FC<{}> = () => {
  return <div>app</div>
}

document.body.innerHTML = '<div id="options"></div>'

const root = createRoot(document.getElementById('options'))
root.render(<App />)
