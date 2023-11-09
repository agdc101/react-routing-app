function Error () {
  const data = useLoaderData();
  const error = data.error;
  return /*#__PURE__*/React.createElement("p", null, "Error: ", error.message);
}

export default Error;