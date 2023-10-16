'use client';
import { atom } from 'recoil';

export const globalState = atom({
  key: 'global',
  default: 'global',
});
