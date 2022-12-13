import { ACTION_TYPE } from '@constants';
import { reduce } from '@utils';

export const cacheAny = (payload) => reduce.set(ACTION_TYPE.CACHE_ANY, payload);
