import { writable } from 'svelte/store';

export const showLoadingPage = writable(false);
export const errorMessage = writable('ERROR');
export const errorPage = writable(false);

export const isLogin = writable(false);
export const username = writable('');
export const nickname = writable('');