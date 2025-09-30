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

interface NotesRequest {
  categoryId?: string;
}

axios.defaults.baseURL = "https://next-docs-api.onrender.com";

export const fetchNotes = async (params?: NotesRequest) => {
  const res = await axios.get<NoteListResponse>("/notes", {
    params: {
      categoryId: params.id,
    },
  });
  return res.data;
};

export const getSingleNote = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(`/notes/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const { data } = await axios.get("/categories");
  return data;
};
