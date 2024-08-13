const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello, World!",
    user: "Charles",
    added: new Date(),
  },
];

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
];

module.exports = {
  getMessages: (req, res) => {
    res.render("index", {
      title: "Mini Message Board",
      messages: messages,
      links: links,
    });
  },
  postMessage: (req, res) => {
    messages.push({
      id: message.length,
      text: req.body.messageText,
      user: req.body.messageAuthor,
      added: new Date(),
    });
    res.redirect("/");
  },
  getForm: (req, res) => {
    res.render("form", { links: links });
  },
  getMessageDetails: (req, res) => {
    const message = messages.find(
      (message) => message.id === parseInt(req.params.id)
    );
    res.render("messageDetails", { message: message, links: links });
  },
};
