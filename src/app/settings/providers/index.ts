import { materialProvider } from './material.provider';
import { formlyProvider } from './formly.provider';

export * from './material.provider';
export * from './formly.provider';

export const CORE_SETTINGS_PROVIDERS = [materialProvider, formlyProvider];
