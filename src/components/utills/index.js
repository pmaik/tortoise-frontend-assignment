import { tableHeader } from "../Constants";

const getDataObj = (header, item) => {
  const {
    name,
    designation,
    device,
    addsOn,
    requestedOn,
    requestedOnText,
    amount,
    claimStatus,
  } = item || {};

  switch (header.id) {
    case "employee":
      return {
        text: name,
        subtext: designation,
      };
    case "device":
      return {
        text: device,
        subtext: addsOn === 0 ? "No add-ons" : `${addsOn - 1} + add-ons`,
      };
    case "requested_on":
      return {
        text: requestedOnText,
        subtext: requestedOn,
      };
    case "amount":
      return {
        text: amount,
        subtext: "For 6 months",
      };
    default:
      return {
        text: claimStatus,
      };
  }
};

export const formatData = (items) => {
  return items.map((item, index) => {
    const obj = tableHeader.reduce((acc, header) => {
      acc[header.id] = getDataObj(header, item);
      return acc;
    }, {});
    return { ...obj, id: index };
  });
};
