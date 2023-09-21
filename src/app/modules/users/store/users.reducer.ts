import {Action, createReducer, on} from '@ngrx/store';
import { clearStory, loadStories, loadStoryById, loadUserStatistic, loadedStories, loadedStoryById, loadedUserStatistic } from './users.actions';
import {initialState, UsersState} from './users.state';

const reducer = createReducer(
    initialState,
    on(loadStories, (state) => ({
        ...state,
        storiesLoader: true
    })),
    on(loadedStories, (state, {stories}) => ({
        ...state,
        stories,
        storiesLoader: false
    })),
    on(loadStoryById, (state) => ({
        ...state,
        storyLoader: true
    })),
    on(loadedStoryById, (state, {story}) => ({
        ...state,
        story,
        storyLoader: false
    })),
    on(clearStory, (state) => ({
        ...state,
        story: null,
    })),
    on(loadUserStatistic, (state) => ({
        ...state,
        userStatisticLoader: true,
    })),
    on(loadedUserStatistic, (state, {statistic}) => ({
        ...state,
        userStatisticLoader: false,
        userStatistic: statistic
    })),
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return reducer(state, action);
}
