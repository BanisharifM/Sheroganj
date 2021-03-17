import React from "react";
import NavItem from "../../components/global/BaseLayout/NavItem";
import DashboardIcon from "../../components/icons/DashboardIcon";
import FinancialIcon from "../../components/icons/FinancialIcon";
import LotteryIcon from "../../components/icons/LotteryIcon";
import SupportIcon from "../../components/icons/SupportIcon";
import TopUsersIcon from "../../components/icons/TopUsersIcon";
import UsersListIcon from "../../components/icons/UsersListIcon";
import {IRoute} from "./types";

export const baseRoute = "/panel";
export const routes: IRoute[] = [
  {
    href: "/dashboard",
    title: "داشبورد",
    icon: DashboardIcon,
  },
  {
    href: "/financial",
    title: "گزارش مالی",
    icon: FinancialIcon,
  },
  {
    href: "/users-list",
    title: "لیست کاربران",
    icon: UsersListIcon,
  },
  {
    href: "/best-users",
    title: "کاربران برتر",
    icon: TopUsersIcon,
  },
  {
    href: "/lottery",
    title: "قرعه کشی",
    icon: LotteryIcon,
  },
  {
    href: "/support",
    title: "پشتیبانی",
    icon: SupportIcon,
  },
];

export const renderLinks = (links: IRoute[]) => {
  return links.map(({href, ...rest}) => {
    return <NavItem {...rest} href={baseRoute + href} />;
  });
};
