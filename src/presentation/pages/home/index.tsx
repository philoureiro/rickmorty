import CardGrid from "../../components/cardGrid";
import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import "../../styles/index.css";
import { makeRemoteGetCharacters } from "../../../application/factories/usecases/characters/remote-getCharacters-factory";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import Pagination from "../../components/pagination";
function Home() {
  const [filter, setfilter] = useState<string>("");
  const [pages, setPages] = useState<number>(1);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfilter(e.target.value);
    setPages(1);
  };
  const handlePage = (click: number) => {
    if ((page: typeof pages) => 1) {
      setPages(pages + click);
    }
  };
  const debouncedChange = useCallback(
    debounce(async (e) => {
      handleFilter(e);
    }, 700),
    []
  );

  return (
    <>
      <Header />
      <SearchBar
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          debouncedChange(e)
        }
      />
      <CardGrid getData={makeRemoteGetCharacters(pages, filter)} />
      <Pagination
        handleClick={(page: number) => handlePage(page)}
        page={pages}
      />
    </>
  );
}

export default Home;
