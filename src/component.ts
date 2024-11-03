export default (text = "Hello world we are trying itim fonts") => {
  const element = document.createElement("h1");

  element.innerHTML = text;
  return element;
};
