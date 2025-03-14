import type { MenuProps } from "antd";

import React, { useState, useEffect } from "react";
import { To, useLocation, useNavigate } from "react-router-dom";
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

const Sidebar: React.FC<SidebarProps> = ({
  onCollapse,
  collapsed: externalCollapsed,
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const collapsed =
    externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
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

  const handleMenuClick: MenuProps["onClick"] = (e: { key: To; }) => {
    navigate(e.key);
  };

  return (
    <>
      {isMobile && !collapsed && (
        <div
          aria-label="Close sidebar"
          role="button"
          className="fixed inset-0 bg-black/50 z-[90]"
          tabIndex={0}
          onClick={handleToggleCollapse}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              handleToggleCollapse();
            }
          }}
        />
      )}

      {isMobile && collapsed && (
        <Button
          icon={<MenuUnfoldOutlined />}
          className="fixed top-5 left-5 z-[99]"
          type="primary"
          onClick={handleToggleCollapse}
        />
      )}

      <Sider
        collapsible
        breakpoint="md"
        collapsed={collapsed}
        collapsedWidth={isMobile ? 0 : 80}
        className="border-r border-[#f0f0f0] overflow-auto h-screen fixed left-0 top-0 bottom-0 z-[100]"
        style={{ backgroundColor: colorBgContainer }}
        trigger={null}
        width={250}
        onBreakpoint={(broken: boolean | ((prevState: boolean) => boolean)) => {
          setIsMobile(broken);
        }}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#f0f0f0]">
          {!collapsed && (
            <div className="rounded-lg">
              <img
                alt="Fitflo Logo"
                className="w-[120px] h-8"
                src="/logoicon.svg"
              />
            </div>
          )}
          <Button
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className="text-base"
            type="text"
            onClick={handleToggleCollapse}
          />
        </div>

        <Menu
          defaultSelectedKeys={[location.pathname]}
          items={items}
          mode="inline"
          selectedKeys={[location.pathname]}
          className="border-r-0"
          onClick={handleMenuClick}
        />

        <div className="p-4 absolute bottom-0 w-full border-t border-[#f0f0f0]">
          <Button
            danger
            icon={<LogoutOutlined />}
            className="w-full"
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
