import type { MenuProps } from "antd";

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  ScheduleOutlined,
  MedicineBoxOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Sider } = Layout;

interface SidebarProps {
  onCollapse?: (collapsed: boolean) => void;
  collapsed?: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Sidebar: React.FC<SidebarProps> = ({
  onCollapse,
  collapsed: externalCollapsed,
}) => {
  // Use local state as a fallback if no external state is provided
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Determine which collapsed state to use
  const collapsed =
    externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        // Only call onCollapse if we're transitioning to mobile
        if (!collapsed) {
          if (onCollapse) {
            onCollapse(true);
          } else {
            setInternalCollapsed(true);
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [collapsed, onCollapse]);

  const handleToggleCollapse = () => {
    const newCollapsed = !collapsed;

    if (onCollapse) {
      onCollapse(newCollapsed);
    } else {
      setInternalCollapsed(newCollapsed);
    }
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  const items: MenuProps["items"] = [
    {
      key: "/dashboard",
      icon: <HomeOutlined />,
      label: "Dashboard",
    },
    {
      key: "/pathway",
      icon: <ScheduleOutlined />,
      label: "Pathway Planner",
    },
    {
      key: "/healthcare",
      icon: <MedicineBoxOutlined />,
      label: "Healthcare",
    },
    {
      key: "/personal-care",
      icon: <HeartOutlined />,
      label: "Personal Care",
    },
    {
      type: "divider",
    },
    {
      key: "/faq",
      icon: <QuestionCircleOutlined />,
      label: "FAQ",
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "/profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <>
      {/* Backdrop for mobile view when sidebar is open */}
      {isMobile && !collapsed && (
        <div
          aria-label="Close sidebar"
          role="button"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 90,
          }}
          tabIndex={0}
          onClick={handleToggleCollapse}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              handleToggleCollapse();
            }
          }}
        />
      )}

      {/* Mobile menu toggle button that appears when sidebar is collapsed */}
      {isMobile && collapsed && (
        <Button
          icon={<MenuUnfoldOutlined />}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: 99,
          }}
          type="primary"
          onClick={handleToggleCollapse}
        />
      )}

      <Sider
        collapsible
        breakpoint="md"
        collapsed={collapsed}
        collapsedWidth={isMobile ? 0 : 80}
        style={{
          backgroundColor: colorBgContainer,
          borderRight: "1px solid #f0f0f0",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 100,
        }}
        trigger={null}
        width={250}
        onBreakpoint={(broken) => {
          setIsMobile(broken);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          {!collapsed && (
            <div className="bg-primary p-2 rounded-lg">
              <img
                alt="Fitflo Logo"
                className="w-[120px] h-8"
                src="/logoicon.svg"
              />
            </div>
          )}
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            style={{
              fontSize: "16px",
            }}
            type="text"
            onClick={handleToggleCollapse}
          />
        </div>

        <Menu
          defaultSelectedKeys={[location.pathname]}
          items={items}
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ borderRight: 0 }}
          onClick={handleMenuClick}
        />

        <div
          style={{
            padding: "16px",
            position: "absolute",
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          <Button
            danger
            icon={<LogoutOutlined />}
            style={{ width: "100%" }}
            type="primary"
            onClick={handleLogout}
          >
            {!collapsed && "Logout"}
          </Button>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
