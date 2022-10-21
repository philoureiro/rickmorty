import Pagination from "../presentation/components/pagination";
import { render, screen } from "@testing-library/react";
describe("<Pagination/>", () => {
  test("returns the pagination component", async () => {
    function handleTest() {}
    render(<Pagination handleClick={() => handleTest()} page={1} />);
    const item = await screen.findAllByText("1");
    expect(item.length).toBe(1);
  });
});
