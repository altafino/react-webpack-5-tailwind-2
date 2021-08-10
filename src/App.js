import { Component } from 'react'

import Logo from './assets/altafino.svg'
import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20'>
          <div>
            Webpack 6 boilerplate with React 17, Tailwind 2, using babel, sass,
            with a hot dev server and an optimized production build.
            <div className={'bg-red-500 text-white'}>
              process.env.API_URL:{process.env.API_URL} !!! Make sure to put
              both .env.* files in gitignore.
            </div>
            <div className={'container mx-auto px-4'}>
              <a href={'https://altafino.com'}>
                <Logo className={'mt-10 px-10'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
