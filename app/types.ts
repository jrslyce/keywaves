import { ApplicationStatus, UserRole } from '@prisma/client'

export interface Application {
  id: string;
  status: ApplicationStatus;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    role: UserRole | null;
  };
  companyName: string;
  website: string;
  reason: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
