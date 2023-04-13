import * as fs from "node:fs";
import { lexer } from "./src/lexer";
import { parser } from "./src/parser";
import { generateCode, executeCode } from "./src/generator";
import { Command } from "commander";

const program = new Command();
const print = (content: any) => console.log(JSON.stringify(content, null, 4));

program
  .arguments("<source.lang>")
  .option("-t, --tokens [file]", "output the tokens generated by the lexer.")
  .option("-a, --ast [file]", "output the AST generated by the parser")
  .parse(process.argv);

const options = program.opts();
const args = program.args;

const source = fs.readFileSync(args[0], "utf-8");

const lexerResult = lexer(source);
const parserResult = parser([...lexerResult]);
for (const option in options) {
  switch (option) {
    case "tokens": {
      if ("boolean" === typeof options.tokens) {
        print(lexerResult);
      } else {
        fs.writeFile(options.tokens, JSON.stringify(lexerResult, null, 4), (err) => {
          if (err) throw err;
        });
      }
      break;
    }

    case "ast": {
      if ("boolean" === typeof options.ast) {
        print(parserResult);
      } else {
        fs.writeFile(options.ast, JSON.stringify(parserResult, null, 4), (err) => {
          if (err) throw err;
        });
      }
      break;
    }
  }
}

if (Object.keys(options).length === 0) {
  executeCode(generateCode([...parserResult.body]));
}
