export interface RootState {
    name: string | null,
    role: string | null,
    isDarkMode: boolean,
    loadingButton: boolean,
}

export const initialState: RootState = {
    name: null,
    role: null,
    isDarkMode: false,
    loadingButton: false
};
