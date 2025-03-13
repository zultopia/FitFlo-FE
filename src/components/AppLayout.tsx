import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sidebar from "./sidebar";

const { Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar collapsed={collapsed} onCollapse={handleCollapse} />
      <Layout
        style={{
          marginLeft: collapsed ? (isMobile ? 0 : 80) : isMobile ? 0 : 250,
          transition: "margin-left 0.2s",
        }}
      >
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "linear-gradient(to bottom right, #EBF5FF, #E1EFFE)",
            borderRadius: 8,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
