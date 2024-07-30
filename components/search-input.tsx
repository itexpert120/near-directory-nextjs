"use client";

import { useSearchStore } from "@/store/search-store";
import { Search as SearchIcon } from "lucide-react";

export default function SearchInput() {
  const { searchKey } = useSearchStore();
  return (
    <div className="relative mx-auto w-full max-w-72">
      <input
        type="text"
        value={searchKey}
        placeholder="Search projects"
        onChange={(e) => useSearchStore.setState({ searchKey: e.target.value })}
        className="w-full rounded-full border border-[#BEBDBE] bg-black p-4 pl-12 font-medium text-white"
      />
      <SearchIcon className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-[#7E7E7E]" />
    </div>
  );
}