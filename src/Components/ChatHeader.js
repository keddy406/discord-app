import React from "react";
import "./ChatHeader.css";

import NotificationIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationIcon />
        <EditLocationRoundedIcon />
        <PeopleAltOutlinedIcon />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SendRoundedIcon />
          <HelpRoundedIcon />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
