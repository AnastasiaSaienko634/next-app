import NoteList from "@/app/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import React from "react";

interface Props {
  params: Promise<{ filters: string[] }>;
}

const FilterPage = async ({ params }: Props) => {
  const { filters } = await params;
  const [categoryId] = filters;

  const queryParams = {
    categoryId: categoryId === "all" ? undefined : categoryId,
  };
  const notes = await fetchNotes(queryParams);
  return <div>{notes?.length > 0 && <NoteList />}</div>;
};

export default FilterPage;
