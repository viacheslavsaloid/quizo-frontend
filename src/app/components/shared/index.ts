import { POPUP_COMPONENTS } from './popups';
import { FORMLY_COMPONENTS } from './formly';
import { CORE_COMPONENTS } from './core';
import { LAYOUT_COMPONENTS } from './layout';
import { FUSE_COMPONENTS } from './fuse';

export * from './popups';
export * from './formly';
export * from './core';
export * from './layout';
export * from './fuse';

export const SHARED_COMPONENTS = [
  ...CORE_COMPONENTS,
  ...POPUP_COMPONENTS,
  ...FORMLY_COMPONENTS,
  ...LAYOUT_COMPONENTS,
  ...FUSE_COMPONENTS,
];
