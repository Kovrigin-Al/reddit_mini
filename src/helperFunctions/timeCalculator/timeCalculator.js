import pluralize from "pluralize";

export function timeAgo(createdTime) {
  const timeDifferenceUnix = Date.now() - createdTime * 1000;
  const timeDifference = new Date(timeDifferenceUnix);
  return timeDifference.getMonth()
    ? `${pluralize("month", timeDifference.getMonth(), true)} ago`
    : timeDifference.getDate() - 1
    ? `${pluralize("day", timeDifference.getDate(), true)} ago`
    : timeDifference.getHours()
    ? `${pluralize("hour", timeDifference.getHours(), true)} ago`
    : timeDifference.getMinutes()
    ? `${pluralize("minute", timeDifference.getMinutes(), true)} ago`
    : "less than a minute ago";
}
