import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Note from './Note'

test('render content', () => {
  const note = {
    content: 'This is a test',
    important: true
  }
  const component = render(<Note note={note} />)

  component.getByText('This is a test')
  component.getByText('make not important')
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  // funcion para saber cuantas veces se ejecuta
  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)

  const button = component.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)
})
