import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, DatePicker, Flex, Typography } from "antd";
import React from "react";

const AppHeader = () => {
  return (
    <Flex justify="space-between" align="center">
      <Flex align="center" gap="small">
        <Button
          type="text"
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3254 2.95337C10.3752 2.99612 10.4162 3.04828 10.4459 3.10688C10.4756 3.16547 10.4935 3.22934 10.4985 3.29484C10.5035 3.36035 10.4956 3.4262 10.4751 3.48863C10.4547 3.55106 10.4221 3.60885 10.3794 3.6587L6.65868 8.00003L10.3794 12.3414C10.4246 12.3908 10.4595 12.4488 10.4819 12.512C10.5043 12.5752 10.5137 12.6422 10.5097 12.7091C10.5057 12.776 10.4882 12.8415 10.4584 12.9015C10.4286 12.9615 10.387 13.0149 10.3361 13.0586C10.2852 13.1022 10.2261 13.1352 10.1622 13.1555C10.0983 13.1758 10.031 13.1831 9.9643 13.1769C9.89755 13.1707 9.83274 13.1511 9.77371 13.1194C9.71468 13.0876 9.66264 13.0443 9.62068 12.992L5.62068 8.32537C5.54304 8.23476 5.50037 8.11936 5.50037 8.00003C5.50037 7.88071 5.54304 7.76531 5.62068 7.6747L9.62068 3.00804C9.70701 2.90749 9.82971 2.84533 9.96184 2.8352C10.094 2.82508 10.2247 2.86782 10.3254 2.95404"
                fill="#171A1F"
              />
            </svg>
          }
        />
        <DatePicker
          placeholder="May 14, 2024"
          inputReadOnly
          allowClear={false}
          variant="borderless"
          suffixIcon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5833 12.8333C15.8264 12.8333 16.0596 12.7368 16.2315 12.5648C16.4034 12.3929 16.5 12.1598 16.5 11.9167C16.5 11.6736 16.4034 11.4404 16.2315 11.2685C16.0596 11.0966 15.8264 11 15.5833 11C15.3402 11 15.1071 11.0966 14.9352 11.2685C14.7632 11.4404 14.6667 11.6736 14.6667 11.9167C14.6667 12.1598 14.7632 12.3929 14.9352 12.5648C15.1071 12.7368 15.3402 12.8333 15.5833 12.8333ZM15.5833 16.5C15.8264 16.5 16.0596 16.4034 16.2315 16.2315C16.4034 16.0596 16.5 15.8264 16.5 15.5833C16.5 15.3402 16.4034 15.1071 16.2315 14.9352C16.0596 14.7632 15.8264 14.6667 15.5833 14.6667C15.3402 14.6667 15.1071 14.7632 14.9352 14.9352C14.7632 15.1071 14.6667 15.3402 14.6667 15.5833C14.6667 15.8264 14.7632 16.0596 14.9352 16.2315C15.1071 16.4034 15.3402 16.5 15.5833 16.5ZM11.9167 11.9167C11.9167 12.1598 11.8201 12.3929 11.6482 12.5648C11.4763 12.7368 11.2431 12.8333 11 12.8333C10.7569 12.8333 10.5237 12.7368 10.3518 12.5648C10.1799 12.3929 10.0833 12.1598 10.0833 11.9167C10.0833 11.6736 10.1799 11.4404 10.3518 11.2685C10.5237 11.0966 10.7569 11 11 11C11.2431 11 11.4763 11.0966 11.6482 11.2685C11.8201 11.4404 11.9167 11.6736 11.9167 11.9167ZM11.9167 15.5833C11.9167 15.8264 11.8201 16.0596 11.6482 16.2315C11.4763 16.4034 11.2431 16.5 11 16.5C10.7569 16.5 10.5237 16.4034 10.3518 16.2315C10.1799 16.0596 10.0833 15.8264 10.0833 15.5833C10.0833 15.3402 10.1799 15.1071 10.3518 14.9352C10.5237 14.7632 10.7569 14.6667 11 14.6667C11.2431 14.6667 11.4763 14.7632 11.6482 14.9352C11.8201 15.1071 11.9167 15.3402 11.9167 15.5833ZM6.41667 12.8333C6.65978 12.8333 6.89294 12.7368 7.06485 12.5648C7.23676 12.3929 7.33333 12.1598 7.33333 11.9167C7.33333 11.6736 7.23676 11.4404 7.06485 11.2685C6.89294 11.0966 6.65978 11 6.41667 11C6.17355 11 5.94039 11.0966 5.76849 11.2685C5.59658 11.4404 5.5 11.6736 5.5 11.9167C5.5 12.1598 5.59658 12.3929 5.76849 12.5648C5.94039 12.7368 6.17355 12.8333 6.41667 12.8333ZM6.41667 16.5C6.65978 16.5 6.89294 16.4034 7.06485 16.2315C7.23676 16.0596 7.33333 15.8264 7.33333 15.5833C7.33333 15.3402 7.23676 15.1071 7.06485 14.9352C6.89294 14.7632 6.65978 14.6667 6.41667 14.6667C6.17355 14.6667 5.94039 14.7632 5.76849 14.9352C5.59658 15.1071 5.5 15.3402 5.5 15.5833C5.5 15.8264 5.59658 16.0596 5.76849 16.2315C5.94039 16.4034 6.17355 16.5 6.41667 16.5Z"
                fill="#2F56DE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.41665 1.60413C6.59898 1.60413 6.77385 1.67656 6.90278 1.80549C7.03171 1.93442 7.10415 2.10929 7.10415 2.29163V2.99104C7.71098 2.97913 8.37923 2.97913 9.11439 2.97913H12.8846C13.6207 2.97913 14.289 2.97913 14.8958 2.99104V2.29163C14.8958 2.10929 14.9682 1.93442 15.0972 1.80549C15.2261 1.67656 15.401 1.60413 15.5833 1.60413C15.7656 1.60413 15.9405 1.67656 16.0694 1.80549C16.1984 1.93442 16.2708 2.10929 16.2708 2.29163V3.04971C16.5091 3.06804 16.7346 3.09096 16.9482 3.11938C18.0226 3.26421 18.8925 3.56854 19.5791 4.25421C20.2647 4.94079 20.5691 5.81071 20.7139 6.88504C20.8541 7.93004 20.8541 9.26379 20.8541 10.9486V12.8846C20.8541 14.5695 20.8541 15.9041 20.7139 16.9482C20.5691 18.0225 20.2647 18.8925 19.5791 19.579C18.8925 20.2647 18.0226 20.569 16.9482 20.7139C15.9032 20.8541 14.5695 20.8541 12.8846 20.8541H9.11623C7.43139 20.8541 6.09673 20.8541 5.05265 20.7139C3.97831 20.569 3.10839 20.2647 2.42181 19.579C1.73615 18.8925 1.43181 18.0225 1.28698 16.9482C1.14673 15.9032 1.14673 14.5695 1.14673 12.8846V10.9486C1.14673 9.26379 1.14673 7.92913 1.28698 6.88504C1.43181 5.81071 1.73615 4.94079 2.42181 4.25421C3.10839 3.56854 3.97831 3.26421 5.05265 3.11938C5.26623 3.09096 5.49264 3.06804 5.73006 3.04971V2.29163C5.73006 2.10945 5.80237 1.93472 5.9311 1.80581C6.05983 1.67691 6.23447 1.60437 6.41665 1.60413ZM5.23415 4.48246C4.3129 4.60621 3.78123 4.83904 3.39348 5.22679C3.00573 5.61454 2.7729 6.14621 2.64915 7.06838C2.62806 7.22421 2.61065 7.38921 2.59598 7.56246H19.404C19.3893 7.38829 19.3719 7.22421 19.3508 7.06746C19.2271 6.14621 18.9942 5.61454 18.6065 5.22679C18.2187 4.83904 17.6871 4.60621 16.7649 4.48246C15.8235 4.35596 14.5814 4.35413 12.8333 4.35413H9.16664C7.41856 4.35413 6.1774 4.35596 5.23415 4.48246ZM2.52081 11C2.52081 10.2171 2.52081 9.53604 2.53273 8.93746H19.4672C19.4791 9.53604 19.4791 10.2171 19.4791 11V12.8333C19.4791 14.5814 19.4773 15.8235 19.3508 16.7658C19.2271 17.687 18.9942 18.2187 18.6065 18.6065C18.2187 18.9942 17.6871 19.227 16.7649 19.3508C15.8235 19.4773 14.5814 19.4791 12.8333 19.4791H9.16664C7.41856 19.4791 6.1774 19.4773 5.23415 19.3508C4.3129 19.227 3.78123 18.9942 3.39348 18.6065C3.00573 18.2187 2.7729 17.687 2.64915 16.7649C2.52265 15.8235 2.52081 14.5814 2.52081 12.8333V11Z"
                fill="#2F56DE"
              />
            </svg>
          }
        />
        <Button
          type="text"
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.67465 13.0466C5.62477 13.0039 5.5838 12.9517 5.55409 12.8931C5.52437 12.8345 5.5065 12.7707 5.50148 12.7052C5.49647 12.6397 5.50441 12.5738 5.52486 12.5114C5.54531 12.4489 5.57786 12.3911 5.62065 12.3413L9.34132 7.99997L5.62065 3.65863C5.57538 3.6092 5.54051 3.55117 5.51812 3.48799C5.49573 3.42481 5.48627 3.35777 5.4903 3.29086C5.49434 3.22396 5.51178 3.15854 5.5416 3.09851C5.57142 3.03848 5.61301 2.98506 5.66389 2.94142C5.71477 2.89778 5.77391 2.86482 5.83778 2.8445C5.90165 2.82417 5.96896 2.8169 6.0357 2.8231C6.10245 2.82931 6.16726 2.84888 6.22629 2.88063C6.28532 2.91239 6.33736 2.95569 6.37932 3.00797L10.3793 7.67463C10.457 7.76524 10.4996 7.88064 10.4996 7.99997C10.4996 8.11929 10.457 8.23469 10.3793 8.3253L6.37932 12.992C6.29299 13.0925 6.17029 13.1547 6.03816 13.1648C5.90603 13.1749 5.77528 13.1322 5.67465 13.046"
                fill="#171A1F"
              />
            </svg>
          }
        />
      </Flex>
      <Flex align="center" gap="small">
        <Button
          type="text"
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5417 2.52087C9.48837 2.52087 8.44537 2.72834 7.47224 3.13142C6.4991 3.53451 5.61489 4.12532 4.87009 4.87012C4.12529 5.61493 3.53448 6.49914 3.13139 7.47227C2.72831 8.4454 2.52084 9.4884 2.52084 10.5417C2.52084 11.595 2.72831 12.638 3.13139 13.6111C3.53448 14.5843 4.12529 15.4685 4.87009 16.2133C5.61489 16.9581 6.4991 17.5489 7.47224 17.952C8.44537 18.3551 9.48837 18.5625 10.5417 18.5625C12.6689 18.5625 14.7091 17.7175 16.2133 16.2133C17.7175 14.7091 18.5625 12.669 18.5625 10.5417C18.5625 8.41445 17.7175 6.37432 16.2133 4.87012C14.7091 3.36592 12.6689 2.52087 10.5417 2.52087ZM1.14584 10.5417C1.14584 5.35337 5.35334 1.14587 10.5417 1.14587C15.73 1.14587 19.9375 5.35337 19.9375 10.5417C19.9375 12.8884 19.0768 15.0352 17.6541 16.6815L20.6525 19.6809C20.7201 19.7438 20.7742 19.8197 20.8118 19.904C20.8494 19.9884 20.8696 20.0794 20.8712 20.1717C20.8728 20.264 20.8559 20.3557 20.8213 20.4413C20.7867 20.5269 20.7352 20.6047 20.67 20.67C20.6047 20.7353 20.5269 20.7867 20.4413 20.8213C20.3557 20.8559 20.264 20.8729 20.1717 20.8713C20.0794 20.8696 19.9883 20.8494 19.904 20.8118C19.8197 20.7743 19.7438 20.7201 19.6808 20.6525L16.6815 17.6541C14.9768 19.13 12.7965 19.9409 10.5417 19.9375C5.35334 19.9375 1.14584 15.73 1.14584 10.5417Z"
                fill="#171A1F"
              />
            </svg>
          }
        />
        <Button
          type="text"
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 1.14587C9.11586 1.14587 7.30888 1.89435 5.97659 3.22664C4.6443 4.55893 3.89583 6.3659 3.89583 8.25004V8.89537C3.89578 9.53419 3.70664 10.1587 3.35225 10.6902L2.30083 12.2696C1.078 14.103 2.01116 16.5945 4.13691 17.1738C4.829 17.3626 5.5275 17.5221 6.23058 17.6532L6.23241 17.6578C6.93641 19.5388 8.82016 20.8542 11 20.8542C13.1798 20.8542 15.0636 19.5388 15.7685 17.6578L15.7703 17.6532C16.4745 17.5222 17.173 17.3623 17.864 17.1738C19.9897 16.5945 20.9229 14.103 19.7001 12.2696L18.6477 10.6902C18.2934 10.1587 18.1042 9.53419 18.1042 8.89537V8.25004C18.1042 6.3659 17.3557 4.55893 16.0234 3.22664C14.6911 1.89435 12.8841 1.14587 11 1.14587ZM14.0947 17.909C12.0386 18.1546 9.96052 18.1546 7.90441 17.909C8.55616 18.8449 9.69008 19.4792 11 19.4792C12.3099 19.4792 13.4429 18.8449 14.0947 17.909ZM5.27083 8.25004C5.27083 6.73057 5.87444 5.27334 6.94886 4.19891C8.02329 3.12448 9.48053 2.52087 11 2.52087C12.5195 2.52087 13.9767 3.12448 15.0511 4.19891C16.1256 5.27334 16.7292 6.73057 16.7292 8.25004V8.89537C16.7292 9.80562 16.9987 10.6957 17.5037 11.4529L18.5561 13.0323C18.7191 13.2765 18.8218 13.556 18.8556 13.8477C18.8893 14.1394 18.8532 14.4349 18.7502 14.7099C18.6473 14.9849 18.4804 15.2315 18.2633 15.4292C18.0463 15.627 17.7853 15.7703 17.5019 15.8474C13.2447 17.0084 8.75434 17.0084 4.49716 15.8474C4.21407 15.7701 3.95337 15.6267 3.73655 15.429C3.51973 15.2312 3.35298 14.9848 3.25004 14.71C3.1471 14.4352 3.11091 14.1399 3.14446 13.8484C3.17801 13.5568 3.28033 13.2774 3.443 13.0332L4.49716 11.4529C5.00183 10.6954 5.27102 9.80555 5.27083 8.89537V8.25004Z"
                fill="#171A1F"
              />
            </svg>
          }
        />
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </Flex>
    </Flex>
  );
};

export default AppHeader;
