import { render } from "@testing-library/react";

import BlogSummary from "./blog-summary";

describe("BlogSummary", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BlogSummary />);
    expect(baseElement).toBeTruthy();
  });
});
