import { useState, useMemo } from "react";

/**
 * Custom hook for filtering items based on a search term.
 *
 * @param items - Array of items to be searched.
 * @param searchKeys - Keys of the items to be included in the search.
 * @returns Object containing searchTerm, setSearchTerm function, and filteredItems.
 */
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
