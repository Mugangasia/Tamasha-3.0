'use client';

import { ButtonHTMLAttributes } from 'react';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export default function LoadingButton({
  isLoading = false,
  loadingText = 'Loading...',
  children,
  className = '',
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <button
      className={`relative inline-flex items-center justify-center ${
        isLoading ? 'cursor-not-allowed' : ''
      } ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
            <span>{loadingText}</span>
          </div>
        </div>
      )}
      <span className={isLoading ? 'invisible' : ''}>{children}</span>
    </button>
  );
}