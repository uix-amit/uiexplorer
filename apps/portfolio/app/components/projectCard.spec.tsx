import { render } from '@testing-library/react';

import ProjectCard from './projectCard';

describe('ProjectCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectCard />);
    expect(baseElement).toBeTruthy();
  });
});
