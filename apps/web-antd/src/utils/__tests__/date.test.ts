import { describe, expect, it } from 'vitest';

import { formatDate, formatDateTime } from '../date';

describe('date', () => {
  it('should format date', () => {
    expect(formatDate(new Date())).toBe('2024-01-01');
  });
});
