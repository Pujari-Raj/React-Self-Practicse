import React from 'react';
import { parseISO, formatDistanceToNow } from "date-fns";

export const TimeAgo = ({ timestamp }) => {

    let timeAgo = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const timeperiod = formatDistanceToNow(date);
        timeAgo = `${timeperiod } ago`
    }

  return (
    <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
