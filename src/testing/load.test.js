import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'

describe('Tests for components load', () => {
  test('Main page loaded', () => {
    render(<App />);
    const element = screen.getByTestId('id');
    expect(element).toBeInTheDocument();
  })

  test('Navigation works', ()=>{
    render(<App />);
    const link = document.querySelector('[href="/categories"]');
    fireEvent.click(link);
    expect(document.body.textContent).toMatch(/Hello world/);
  })
})