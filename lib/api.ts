import axios from "axios";

export type Note = {
  id: number;
  title: string;
  content: string;
  categoryId: string;
  userID: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};
axios.defaults.baseURL = "https://next-docs-api.onrender.com";

export const fetchNotes = async () => {
  const res = await axios.get<NoteListResponse>("/notes");
  return res.data;
};

export const getSingleNote = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
};
