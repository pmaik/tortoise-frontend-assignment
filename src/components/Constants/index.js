export const getHeaderListStyle = (isActive) => {
  return {
    textDecoration: "none",
    color: isActive ? "#3f3636" : "GrayText",
    fontWeight: "bold",
    background: isActive ? "#EFEBEB" : "none",
    padding: "10px",
    borderRadius: "4px",
  };
};
