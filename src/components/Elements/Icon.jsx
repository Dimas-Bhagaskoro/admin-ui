import {
  MdDashboard,
  MdAccountBalanceWallet,
  MdReceiptLong,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import {
  FaBullseye,
  FaExchangeAlt,
} from "react-icons/fa";

import { HiChevronRight } from "react-icons/hi";

const Icon = {
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <MdDashboard size={size} color={color} {...props} />
  ),

  Transaction: ({ size = 24, color = "currentColor", ...props }) => (
    <FaExchangeAlt size={size} color={color} {...props} />
  ),

  Balance: ({ size = 24, color = "currentColor", ...props }) => (
    <MdAccountBalanceWallet size={size} color={color} {...props} />
  ),

  Bill: ({ size = 24, color = "currentColor", ...props }) => (
    <MdReceiptLong size={size} color={color} {...props} />
  ),

  Expense: ({ size = 24, color = "currentColor", ...props }) => (
    <MdReceiptLong size={size} color={color} {...props} />
  ),

  Goal: ({ size = 24, color = "currentColor", ...props }) => (
    <FaBullseye size={size} color={color} {...props} />
  ),

  Setting: ({ size = 24, color = "currentColor", ...props }) => (
    <MdSettings size={size} color={color} {...props} />
  ),

  ChevronRight: ({ size = 24, color = "currentColor", ...props }) => (
    <HiChevronRight size={size} color={color} {...props} />
  ),

  Logout: ({ size = 24, color = "currentColor", ...props }) => (
    <MdLogout size={size} color={color} {...props} />
  ),
};

export default Icon;