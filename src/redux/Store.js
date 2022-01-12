import {createStore} from 'redux';

import { reducer } from '../redux/Reducer';

export const store = createStore(reducer);