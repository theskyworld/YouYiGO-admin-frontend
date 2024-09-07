import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

export default function MyHeader() {
  return (
    <Header className="bg-white mt-1">
      <div className="float-left">
        <Logo />
      </div>
      <div className="float-right">
        <Button size="middle" type="primary" className="bg-purple-400 mr-7">
          预览页面
        </Button>
        <UserAvatar />
      </div>
    </Header>
  );
}
