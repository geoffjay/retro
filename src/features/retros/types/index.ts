import { BaseEntity } from '@/types';
import { User } from "@/features/users/types";

export type RetroItem = {
  id: string | number;
  anonymous: boolean;
  private: boolean;
  description: string;
  user: User;
} & BaseEntity;

export type RetroLane = {
  id: string | number;
  title: string;
  items: RetroItem[];
} & BaseEntity;

export type Retro = {
  id: string | number;
  completed: boolean;
  owner: User;
  lanes: RetroLane[];
} & BaseEntity;
