import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/index'

test('renders deploy link', () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(
    /Instantly deploy your Next\.js site to a public URL with Vercel\./
  )
  expect(linkElement).toBeInTheDocument()
})
