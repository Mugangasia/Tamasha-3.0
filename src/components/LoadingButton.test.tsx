import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoadingButton from './LoadingButton';

describe('LoadingButton', () => {
  it('renders children when not loading', () => {
    render(
      <LoadingButton>Click me</LoadingButton>
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('shows loading text when loading', () => {
    render(
      <LoadingButton isLoading loadingText="Please wait...">
        Click me
      </LoadingButton>
    );
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
    expect(screen.queryByText('Click me')).not.toBeInTheDocument();
  });

  it('disables the button when loading', () => {
    render(
      <LoadingButton isLoading loadingText="Please wait...">
        Click me
      </LoadingButton>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('passes through additional props', () => {
    const onClick = jest.fn();
    render(
      <LoadingButton onClick={onClick} className="custom-class">
        Click me
      </LoadingButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});