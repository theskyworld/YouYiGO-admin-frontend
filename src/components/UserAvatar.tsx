import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { avatar } from "../../mocks/data";
export default function UserAvatar() {
  return (
    <Avatar
      size={46}
      icon={<AntDesignOutlined />}
      src={avatar}
      className="cursor-pointer"
    />
  );
}
