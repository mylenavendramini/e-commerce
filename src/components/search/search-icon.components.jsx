import React, { Fragment } from "react";

import search from "../../assets/search-symbol.png";
import close from "../../assets/close.png";

import { SearchContainer, SearchOpen, SearchClose } from "./search-icon.styles";

const SearchIcon = () => {
  // const [isSearchSuggestionOpen, setIsSearchSuggestionOpen] = useState(false);

  // const openSearchSuggestion = () => {
  //   setIsSearchSuggestionOpen(!isSearchSuggestionOpen);
  // };

  return (
    <Fragment>
      <SearchContainer>
        <SearchOpen
          src={search}
          alt="search"
          style={{
            width: "20px",
          }}
        />
        <SearchClose
          src={close}
          alt="close"
          style={{
            width: "20px",
          }}
        />
      </SearchContainer>
    </Fragment>
  );
};

export default SearchIcon;
