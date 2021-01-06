import React from 'react'

import './app.styles.scss'

class App extends React.Component {
  render() {
    return (
      <div className='bg-blue-500'>
        Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass, with
        a hot dev server and an optimized production build.
        <div className={'bg-red-500 text-white'}>
          process.env.API_URL:{process.env.API_URL} !!! Make sure to put both
          .env.* files in gitignore.
        </div>
      </div>
    )
  }
}
export default App
