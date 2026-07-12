import { useState } from "react";
import type { FormEvent } from "react";
import "./SearchBox.css";

type SearchBoxProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

const SearchBox = ({ placeholder = "Search...", onSearch }: SearchBoxProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch?.(query.trim());
  };

  return (
    <form className="search-box" onSubmit={handleSubmit} role="search">
      <input
        type="search"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit" aria-label="Search">
        <span className="search-icon"></span>
      </button>
    </form>
  );
};

export default SearchBox;
