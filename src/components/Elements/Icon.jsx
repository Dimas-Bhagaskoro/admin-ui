import OverviewSVG from "../../assets/Overview.svg?react";
import TransactionSVG from "../../assets/Transaction.svg?react";
import BalanceSVG from "../../assets/wallet.svg?react";
import BillSVG from "../../assets/Bill.svg?react";
import ExpenseSVG from "../../assets/Expencces.svg?react";
import GoalSVG from "../../assets/Goal.svg?react";
import SettingSVG from "../../assets/Settings.svg?react";
import DetailSVG from "../../assets/Icon.svg?react";
import ChevronRightSVG from "../../assets/chevrons-right.svg?react";
import LogoutSVG from "../../assets/Icon2.svg?react";
import AdobeSVG from "../../assets/Adobe.svg?react";
import FigmaSVG from "../../assets/Figma.svg?react";
import FoodSVG from "../../assets/Food.svg?react";
import GamepadSVG from "../../assets/gamepad-2.svg?react";
import HouseSVG from "../../assets/Housing.svg?react";
import MovieSVG from "../../assets/Movie.svg?react";
import OtherSVG from "../../assets/Others.svg?react";
import ShoppingSVG from "../../assets/Shopping.svg?react";
import TransportSVG from "../../assets/Trasnport.svg?react";
import ArrowRightSVG from "../../assets/arrow-right.svg?react";
import ArrowDownSVG from "../../assets/Downarrow.svg?react";
import ArrowUpSVG from "../../assets/Uparrow.svg?react";

const createIcon =
  (SVG) =>
  ({ size = 24, color = "currentColor", ...props }) =>
    <SVG width={size} height={size} stroke={color} {...props} />;

const Icon = {
  Overview: createIcon(OverviewSVG),
  Transaction: createIcon(TransactionSVG),
  Balance: createIcon(BalanceSVG),
  Bill: createIcon(BillSVG),
  Expense: createIcon(ExpenseSVG),
  Goal: createIcon(GoalSVG),
  Setting: createIcon(SettingSVG),
  Detail: createIcon(DetailSVG),
  ChevronRight: createIcon(ChevronRightSVG),
  Logout: createIcon(LogoutSVG),
  Adobe: createIcon(AdobeSVG),
  Figma: createIcon(FigmaSVG),
  Food: createIcon(FoodSVG),
  Gamepad: createIcon(GamepadSVG),
  House: createIcon(HouseSVG),
  Movie: createIcon(MovieSVG),
  Other: createIcon(OtherSVG),
  Shopping: createIcon(ShoppingSVG),
  Transport: createIcon(TransportSVG),
  ArrowRight: createIcon(ArrowRightSVG),
  ArrowDown: createIcon(ArrowDownSVG),
  ArrowUp: createIcon(ArrowUpSVG),
};

export default Icon;