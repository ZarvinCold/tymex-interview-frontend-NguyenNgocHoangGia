import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  StyledHeaderWrapper,
  StyledHeaderNavWeb,
  StyledHeaderNavItem,
  StyledHeaderActions,
  StyledHeaderButton,
  StyledHamburger,
  StyledHeaderNavResponsive,
} from "./Header.styled";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledHeaderWrapper>
      <StyledHamburger onClick={() => setMenuOpen((open) => !open)}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </StyledHamburger>
      <StyledHeaderNavWeb className={menuOpen ? "hide-on-mobile" : ""}>
        {navItems.map((item) => (
          <StyledHeaderNavItem
            key={item.label}
            as="a"
            className={location.pathname === item.href ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.href);
              setMenuOpen(false);
            }}
            href={item.href}
          >
            {item.label}
          </StyledHeaderNavItem>
        ))}
      </StyledHeaderNavWeb>
      <StyledHeaderNavResponsive className={menuOpen ? "open" : ""}>
        {navItems.map((item) => (
          <StyledHeaderNavItem
            key={item.label}
            as="a"
            className={location.pathname === item.href ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.href);
              setMenuOpen(false);
            }}
            href={item.href}
          >
            {item.label}
          </StyledHeaderNavItem>
        ))}
      </StyledHeaderNavResponsive>
      <StyledHeaderActions>
        <StyledHeaderButton>Connect Wallet</StyledHeaderButton>
      </StyledHeaderActions>
    </StyledHeaderWrapper>
  );
}
