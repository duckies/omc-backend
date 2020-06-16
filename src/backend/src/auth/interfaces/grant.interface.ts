export type Permission =
  | 'create:own'
  | 'create:any'
  | 'read:own'
  | 'read:any'
  | 'update:own'
  | 'update:any'
  | 'destroy:own'
  | 'destroy:any';

export interface Grant {
  resource: string;
  permissions: Permission | Permission[];
}

export interface TransformedGrant {
  resource: string;
  permissions: Permission[];
}
