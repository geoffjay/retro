import { BaseEntity } from "@/types";

export type User = {
  id: string | number;
  admin: boolean;
  email: string;
  displayName: string;
  avatarUrl: string;
} & BaseEntity;
