export interface RootState {
  name: string | null;
  role: string | null;
  isDarkMode: boolean;
  loadingButton: boolean;
  imageName: string | null;
}

export const initialState: RootState = {
  name: 'Иванов Иван Викторович',
  role: null,
  isDarkMode: false,
  loadingButton: false,
  imageName: null,
};
