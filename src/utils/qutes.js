const _qutes = [
  "Coding like poetry should be short and concise. ― Santosh Kalwar",
  "It's not a bug; it's an undocumented feature. ― Anonymous",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Make it work, make it right, make it fast. – Kent Beck",
  "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  "Of course, bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth",
  "Confusion is part of programming. ― Felienne Hermans",
  "If we want users to like our software, we should design it to behave like a likable person.  – Alan Cooper",
  "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk",
  "Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs",
  "Software and cathedrals are much the same — first we build them, then we pray.",
];

export const generateRandomQute = () => {
  const random = Math.floor(Math.random() * (_qutes.length - 1));
  return _qutes[random];
};
