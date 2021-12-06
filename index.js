import chalk from "chalk";
import myCollection from "./collection.js";

function describeItem(item) {
  const { name, count, whatILike } = item;

  const itemString = `I have ${
    count > 1
      ? `${chalk.yellow.bold(count)} ${chalk.cyan(`${name}s`)}. `
      : `${chalk.yellow.bold("a")} ${chalk.cyan(name)}. `
  }`;

  const whatILikeString = `Here's what I like about it: ${chalk.green.inverse(
    whatILike
  )}`;

  console.log(itemString + whatILikeString);
}

function describeCollection(colleciton) {
  colleciton.forEach((item) => {
    describeItem(item);
  });
}

describeCollection(myCollection);
