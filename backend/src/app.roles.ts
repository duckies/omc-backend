import { AccessControl } from 'accesscontrol';

export enum Roles {
  ADMIN = 'admin',
  PARENT = 'parent',
  GUEST = 'guest',
}

const ac = new AccessControl();

ac.grant(Roles.GUEST)
  .createOwn('user')
  .readAny('course')
  .readAny('project')
  .readAny('event')
  .readOwn('user')
  .grant(Roles.PARENT)
  .extend(Roles.GUEST)
  .readOwn('file')
  .readAny('file-field')
  .createOwn('file-attachment')
  .readOwn('file-attachment')
  .deleteOwn('file-attachment')
  .createOwn('event-registration')
  .readOwn('event-registration')
  .createOwn('file')
  .readOwn('file')
  .grant(Roles.ADMIN)
  .extend(Roles.PARENT)
  .readAny('file')
  .updateAny('file')
  .deleteAny('file')
  .createAny('file-field')
  .updateAny('file-field')
  .deleteAny('file-Field')
  .createAny('file-attachment')
  .readAny('file-attachment')
  .updateAny('file-attachment')
  .deleteAny('file-attachment')
  .readAny('account')
  .updateAny('account')
  .deleteAny('account')
  .createAny('course')
  .updateAny('course')
  .deleteAny('course')
  .createAny('event')
  .updateAny('event')
  .deleteAny('event')
  .createAny('project')
  .updateAny('project')
  .deleteAny('project')
  .createAny('user')
  .readAny('user')
  .updateAny('user')
  .deleteAny('user');

export default ac;
