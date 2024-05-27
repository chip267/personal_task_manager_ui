import React, { useState } from "react";
import "./StatusContainer.css";
import { Avatar, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TaskCard from "./TaskCard";

const StatusContainer = ({ status, backgroundColor, titleColor }) => {
  const statusStyle = (bgColor, txtColor) => ({
    backgroundColor: bgColor,
    color: txtColor,
  });

  return (
    <div
      style={statusStyle(backgroundColor, titleColor)}
      className="status-container"
    >
      <span className="status">{status}</span>
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default StatusContainer;
