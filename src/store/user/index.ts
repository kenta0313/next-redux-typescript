import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
    name: string | null
  age: number | null
  email: string | null
  token: string | null
  history: string[]
}