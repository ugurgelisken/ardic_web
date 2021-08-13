const createHTML = (data, t) => {
  const htmlText = data.map((item, index) => {
    if (item.tag === "a") {
      return `<a class="btn-smooth" key=${index} href=${item.text} target="_blank" rel="noopener noreferrer">${t.commons.seeTheDocuments}</a><br/>`;
    }
    return `<${item.tag} key="${index}">${item.text}</${item.tag}>`;
  });
  return {
    __html: htmlText
      .join("")
      .replace(/\*/g, "<br/>●")
      .replace(/\--/g, "<br/>&emsp;○")
      .replace(/\> <br/g, ""),
  };
};

const isExternalLink = (link) => {
  var re = new RegExp("^(http|https)://", "i");
  if (re.test(link)) {
    return true;
  }
  return false;
};

module.exports = {
  createHTML,
  isExternalLink,
};
