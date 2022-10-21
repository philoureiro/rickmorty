import Loading from "../presentation/components/loading";
import { render, screen } from "@testing-library/react";
describe("<Loading/>", () => {
  test("should return the loading component", () => {
    render(<Loading loading={true} />);
    const item = screen.getByText("Loading...");
    expect(item.textContent).toBe("Loading...");
  });
});
