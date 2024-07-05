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

export const IPHONE_URL =
  "https://s3-alpha-sig.figma.com/img/7f5a/5d77/0b06fc3bb3f708edba3eff75768eb960?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6hPxF2qSi5fOVc1q5Ndd-YV5MiXnE1n8rZmBtmRNwRuYenNSvt5ztI~gbDVkZEFqE8GTe5A0Nl0EjSHD-q0NQgrIBi~w6J6GdXq5hkSlPHtdb0JXyG1PAwcEkSXh7Blnk~VQo~nyHCZIvMsQoP~WB6Pmd-~mmPkThBEzILv7treLG5uD71A-zp9QlLWsTkoMeefwpb4dvQrNKxYzw7y7tOMo8sOa3V-wIR3yBh3FuET05ds3KxXYzcPG6P2jpIW~8WMAXk8gZXqPzZN0tbEdMS6tG906uPEhMqRFiAbcYwBl6Smpal47LHHd5bhjuiAPjooCdET5MzER0ONwNf3YQ__";
