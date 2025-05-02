import { useNavigate, useLocation } from "react-router-dom";
import {
  StyledHeaderWrapper,
  StyledHeaderNav,
  StyledHeaderNavItem,
  StyledHeaderActions,
  StyledHeaderButton,
} from "./Header.styled";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledHeaderWrapper>
      <StyledHeaderNav>
        {navItems.map((item) => (
          <StyledHeaderNavItem
            key={item.label}
            as="a"
            className={location.pathname === item.href ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.href);
            }}
            href={item.href}
          >
            {item.label}
          </StyledHeaderNavItem>
        ))}
      </StyledHeaderNav>
      <StyledHeaderActions>
        <StyledHeaderButton>Connect Wallet</StyledHeaderButton>
      </StyledHeaderActions>
    </StyledHeaderWrapper>
  );
}
