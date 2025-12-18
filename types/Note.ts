export enum NoteCategory {
  Work = "Work and Study",
  Life = "Life",
  Health = "Health and Well-being",
}

export type Note = {
  id: string;
  category: NoteCategory;
  content: string;
  createdAt: number;
  updatedAt: number;
};
