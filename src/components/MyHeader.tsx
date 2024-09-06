import { Header } from "antd/es/layout/layout";
import Logo from "./Logo";

export default function MyHeader() {
  return (
    <Header className="bg-white mt-1">
      <Logo />
    </Header>
  );
}
