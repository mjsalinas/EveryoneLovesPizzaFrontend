import { isEmpty } from 'rxjs/operators';

// tslint:disable: typedef
export function isNullOrEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}
