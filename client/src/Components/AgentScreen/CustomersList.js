import React from "react";

function formatRelativeTime(dateTimeString) {
  const currentDate = new Date();
  const inputDate = new Date(dateTimeString);
  const timeDifference = currentDate - inputDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} yr ago`;
  } else if (months > 0) {
    return `${months} mon ago`;
  } else if (days > 0) {
    return `${days} day ago`;
  } else if (hours > 0) {
    return `${hours} hrs ago`;
  } else if (minutes > 0) {
    return `${minutes} min ago`;
  } else {
    return `${seconds} sec ago`;
  }
}

const CustomersList = ({ name, messages }) => {
  let fadedText = messages.length > 0 ? messages[0].message : "";
  fadedText =
    fadedText.length > 50 ? fadedText.substring(0, 30) + "..." : fadedText;

  return (
    <>
      <div class="tickbox-container">
        <div className="tickbox">
          <input type="checkbox" id="checkbox" />
          <label className="name">{name}</label>
        </div>
        <div className="time">
          {formatRelativeTime(messages[0].created_time)}
        </div>
      </div>
      <div className="faded-text">{fadedText}</div>
    </>
  );
};

export default CustomersList;
