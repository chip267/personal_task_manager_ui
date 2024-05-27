import { UserOutlined } from "@ant-design/icons";
import { Avatar, Drawer, Flex } from "antd";
import React, { useState } from "react";
import "./TaskCard.css";

const TaskCard = () => {
  const [openEditDrawer, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Basic Drawer"
        onClose={onClose}
        open={openEditDrawer}
        size="large"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div onClick={showDrawer} className="task">
        <span className="title">Cho meo an</span>
        <div className="flex-row-dbb">
          <button className="frame-2f">
            <span className="behance">Behance</span>
          </button>
          <button className="frame-30">
            <span className="label">Label</span>
          </button>
        </div>
        <Flex gap="small" className="flex-row-d-31" align="center">
          <span className="date">May 14, 2024</span>
          <span className="date">May 14, 2024</span>
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            size={22}
            icon={<UserOutlined />}
          />
        </Flex>
      </div>
    </>
  );
};

export default TaskCard;
