import { ApplicationStatus, UserRole } from '@prisma/client'

export interface Application {
  id: string;
  status: ApplicationStatus;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    role: UserRole | null;
  } | null; // Allow user to be null
  companyName: string;
  website: string;
  reason: string;
  linkedin: string | null; // Ensure this is included if you added it
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
