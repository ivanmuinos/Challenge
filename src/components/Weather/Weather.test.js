import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


/* test("testeo del componente weather(render)", async () => {
  render(<Weather user='Ivan' message='Hoy esta lloviendo'/>)
})

test("testeo del componente weather (render user)", async () => {
  render(<Weather user='Ivan' message='hoy esta lloviendo'/>)

  const usuario = await screen.findByRole('heading')

  screen.debug()
  expect(usuario).toHaveTextContent('Ivan')

})

test("testeo del componente weather (find button)", async () => {
  render(<Weather user='Ivan' message='hoy esta lloviendo'/>)

  const button = await screen.findByRole('button')

  screen.debug()

  expect(button).toHaveTextContent('Mostrar clima')

})

test("testeo del componente weather (click button)", async () => {
  render(<Weather user='Ivan' message='el clima es de 27 grados'/>)

  fireEvent.click(screen.getByRole('button'))

  screen.debug()

  const message = await screen.findByText(/clima es de/)

  expect(message).toHaveTextContent('el clima es de 27 grados')

  fireEvent.click(screen.getByRole('button'))

  const withoutmessage = await screen.findByText(/Sin mensaje/)

  expect(withoutmessage).toHaveTextContent('Sin mensaje')


})


test('Weather component render', async() => {
  const { findAllByRole } = render(<Weather user='Ivan' message='hoy esta lloviendo'/>)

  const weatherComponent = await findAllByRole('heading')

  
}) */