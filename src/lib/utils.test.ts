import { cn } from './utils';
import { describe, it, expect } from 'vitest';

describe('cn', () => {
  it('should merge class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('should handle conditional classes', () => {
    expect(cn('bg-red-500', { 'text-white': true, 'font-bold': false })).toBe('bg-red-500 text-white');
  });

  it('should override conflicting classes', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });

  it('should handle various types of inputs', () => {
    expect(cn('p-4', ['m-2', 'rounded'], { 'shadow-lg': true })).toBe('p-4 m-2 rounded shadow-lg');
  });

  it('should return an empty string for no inputs', () => {
    expect(cn()).toBe('');
  });
});
