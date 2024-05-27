import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Drawer, Flex } from "antd";
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
        title="General"
        onClose={onClose}
        open={openEditDrawer}
        size="large"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Flex vertical gap="small" onClick={showDrawer} className="task">
        <span className="task-title">Cho meo an</span>
        <Flex vertical={false} gap="small">
          <button className="frame-2f">
            <span className="behance">Behance</span>
          </button>
          <button className="frame-30">
            <span className="label">Label</span>
          </button>
        </Flex>
        <Flex gap="small" align="center" style={{ marginTop: 12 }}>
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
      </Flex>
    </>
  );
};

export default TaskCard;
