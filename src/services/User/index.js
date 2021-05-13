import Cookies from 'js-cookie';

import Store from '../../store';
import { userActions } from '../../store/actions';

export default class Events {
  static async storePoints(points) {
    Store.dispatch(userActions.storeUserPoints(points));
    Cookies.set('points', points);
    
    return true;
  }
}
