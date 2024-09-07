import { Layout, theme } from "antd";
import React from "react";
import MyHeader from "../components/MyHeader";
import MySideBar from "../components/MySideBar";

const { Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <MyHeader />
      <Layout>
        <MySideBar />
        <Layout style={{ padding: "20px" }}>
          <Content
            className="overflow-y-auto"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              maxHeight: "80vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
