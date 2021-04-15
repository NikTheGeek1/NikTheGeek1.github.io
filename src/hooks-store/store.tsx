import { useState, useEffect } from 'react';

export interface State { currentPage?: string }

let globalState: State = {};
let listeners: React.Dispatch<React.SetStateAction<State>>[] = [];
let actions: any = {};

export const useStore = (shouldListen = true):
    [State, (actionIdentifier: string, payload: any) => void] => {

    const setState = useState(globalState)[1];
    const dispatch = (actionIdentifier: string, payload: any, shouldNotify:boolean = true) => {
        const newState: State = actions[actionIdentifier](globalState, payload);
        globalState = { ...globalState, ...newState };

        if (shouldNotify) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i](globalState);
            }
        }
    };

    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                listeners = listeners.filter(li => li !== setState);
            }
        };

    }, [setState, shouldListen]);

    return [globalState, dispatch];
};

export const initStore = (userActions: any, initialState: State) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
};
