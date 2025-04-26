"use client";

import CopyRights from "@/Components/Footer/CopyRights/CopyRights";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MobileNavLinks from "./MobileNavLinks/MobileNavLinks";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const { isMobileNavActive } = useSelector((s) => s.global);
  const activeClass = isMobileNavActive ? s.active : "";

  useEffect(() => {
    document.body.classList.toggle("noScroll", isMobileNavActive);
  }, [isMobileNavActive]);

  return (
    <nav className={`${s.mobileNav} ${activeClass}`}>
      <p className={s.title}>Main Navigation</p>

      <MobileNavLinks />

      <div className={s.copyRights}>
        <CopyRights />
      </div>
    </nav>
  );
};

export default MobileNavMenu;
