import { render } from '@testing-library/react';

import Projects from './page';

describe('Projects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Projects />);
    expect(baseElement).toBeTruthy();
  });
});
