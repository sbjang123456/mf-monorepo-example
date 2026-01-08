/**
 * 공통 상수 정의
 */

export const APP_CONFIG = {
  HOST_PORT: 3000,
  REMOTE_PRODUCTS_PORT: 3001,
  REMOTE_USERS_PORT: 3002,
} as const;

export const REMOTE_URLS = {
  products: `http://localhost:${APP_CONFIG.REMOTE_PRODUCTS_PORT}`,
  users: `http://localhost:${APP_CONFIG.REMOTE_USERS_PORT}`,
} as const;

export const ROUTES = {
  home: '/',
  products: '/products',
  users: '/users',
  about: '/about',
} as const;

