import { makeRemoteGetCharacters } from "../application/factories/usecases/characters/remote-getCharacters-factory";
import CardGrid from "../presentation/components/cardGrid";
import { render, screen } from "@testing-library/react";

describe("<CardGrid/>", () => {
  test("returns a Grid of Cards", async () => {
    render(<CardGrid getData={makeRemoteGetCharacters(1, "Rick")} />);
    const items = await screen.findAllByAltText("Character");
    expect(items.length).toBe(20);
  });

  test("returns the loading component", async () => {
    render(<CardGrid getData={makeRemoteGetCharacters(1, "test-fake-data")} />);
    const items = await screen.findAllByText("Loading...");
    expect(items.length).toBe(1);
  });
});
