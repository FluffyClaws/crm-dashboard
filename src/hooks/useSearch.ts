import { useState, useMemo } from "react";

function useSearch<T extends Record<string, any>>(
  items: T[],
  searchKeys: string[]
) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    if (!trimmedSearchTerm) return items;

    return items.filter((item) =>
      searchKeys.some((key) => {
        const value = item[key];
        const stringValue =
          typeof value === "string" ? value.toLowerCase() : String(value);
        return stringValue.includes(trimmedSearchTerm);
      })
    );
  }, [items, searchTerm, searchKeys]);

  return { searchTerm, setSearchTerm, filteredItems };
}

export default useSearch;
