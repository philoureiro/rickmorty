import SearchBar from "../presentation/components/searchBar";
import { render, screen } from "@testing-library/react";
describe("<SearchBar/>", () => {
  test("returns a search bar", async () => {
    function handleTest() {}
    render(<SearchBar handleChange={() => handleTest()} />);
    const item = await screen.findByPlaceholderText("Procure um personagem");
    expect(item.textContent).toBe("");
  });
});
