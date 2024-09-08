import { Matcher, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MySideBar, { sideBarItems } from "../components/MySideBar";
import { MenuItemType } from "antd/es/menu/interface";

describe("MySideBar", () => {
  const renderComponent = async () => {
    render(<MySideBar />);
    const user = userEvent.setup();
    await user.tab();
  };
  it("should render sideBarItems", () => {
    renderComponent();
    sideBarItems.forEach((item) => {
      expect(
        screen.getByText((item as MenuItemType)!.title as Matcher),
      ).toBeInTheDocument();
      // TODO 添加关于icon的测试
    });
  });
});
