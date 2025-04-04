"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Header.module.scss";
import MainNav from "./MainNav/MainNav";

const Header = () => {
  const { isNotFoundPage } = useSelector((s) => s.global);
  const v2Class = isNotFoundPage ? s.v2 : "";

  return (
    <header className={`${s.header} ${v2Class}`}>
      <div className="container" data-container>
        <Link href="/" className={s.logo}>
          <SvgIcon name="trophy" />
          <span>JumpersHeaven</span>
        </Link>

        <MainNav />
      </div>
    </header>
  );
};

export default Header;
