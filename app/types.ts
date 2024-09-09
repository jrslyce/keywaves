import { ApplicationStatus } from '@prisma/client'
import { UserRole } from '@prisma/client'

export interface Application {
  id: string;
  status: string;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    role: UserRole;
  };
  companyName: string;
  website: string;
  reason: string;
  userId: string;
}
