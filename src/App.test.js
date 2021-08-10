import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('check first div text', () => {
  render(<App />)
  const linkElement = screen.getByText(
    /Webpack 6 boilerplate with React 17, Tailwind 2, using babel/i
  )
  expect(linkElement).toBeInTheDocument()
})
