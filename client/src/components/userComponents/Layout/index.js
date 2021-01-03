import React from "react";
import AppFooter from "../AppFooter";
import "./style.css";
export default function Layout({ children, background, page }) {
  return (
    <div className="dl-layout" style={{ background: background }}>
      <div className="dl-l-cont">{children}</div>
      <AppFooter page={page} />
    </div>
  );
}
