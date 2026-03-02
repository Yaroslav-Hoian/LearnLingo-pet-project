import { Reason } from "./constants/reason";

export interface UserBooking {
  reason: Reason;
  fullName: string;
  email: string;
  phoneNumber: string;
}
