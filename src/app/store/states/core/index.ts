import { AuthState } from './auth.state';
import { ConfigsState } from './configs.state';

export * from './auth.state';
export * from './configs.state';

export const CORE_STATES = [AuthState, ConfigsState];
