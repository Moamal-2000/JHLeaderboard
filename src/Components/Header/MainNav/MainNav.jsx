"use client";

import SvgIcon from "@/Components/Shared/SvgIcon";
import { NAV_LINKS_DATA } from "@/Data/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./MainNav.module.scss";

const MainNav = () => {
  const currentPage = usePathname();

  return (
    <nav className={s.mainNav}>
      {NAV_LINKS_DATA.map(({ name, href, iconName, id }) => (
        <Link
          key={id}
          href={href}
          className={currentPage === href ? s.active : ""}
        >
          <SvgIcon name={iconName} />
          <span>{name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
