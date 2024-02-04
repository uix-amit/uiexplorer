import { render } from '@testing-library/react';

import ProjectCard from './projectCard';

describe('ProjectCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProjectCard
        company={''}
        tenure={''}
        position={''}
        projects={[]}
        description={[]}
        technologies={[]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
