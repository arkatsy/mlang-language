# **A mini programming language written in Typescript**

### Grammar:

```ebnf
<program> ::= (<statement>)*

<statement> ::= <variable-assignment>
              | <array-assignment>
              | <expression>
              | <function-definition>
              | <function-call>
              | <if-statement>
              | <for-loop>
              | <while-loop>

<variable-assignment> ::= <identifier> "=" <expression> ";"

<array-assignment> ::= <identifier> "[" <expression> "]" "=" <expression> ";"

<expression> ::= <term> ( "+" <term> | "-" <term> )*

<term> ::= <factor> ( "*" <factor> | "/" <factor> | "%" <factor> )*

<factor> ::= <identifier> | <number> | <string> | <boolean> | <function-call> | "(" <expression> ")"

<boolean> ::= "true" | "false"

<function-definition> ::= "function" <identifier> "(" (<identifier> ("," <identifier>)*)? ")" "{" (<statement>)* "}"

<function-call> ::= <identifier> "(" (<expression> ("," <expression>)*)? ")"

<if-statement> ::= "if" "(" <expression> ")" "{" (<statement>)* "}" ( "elseif" "(" <expression> ")" "{" (<statement>)* "}" )* ( "else" "{" (<statement>)* "}" )?

<for-loop> ::= "for" "(" <variable-assignment> ";" <expression> ";" <expression> ")" "{" (<statement>)* "}"

<while-loop> ::= "while" "(" <expression> ")" "{" (<statement>)* "}"

<number> ::= ( "-" )? ( "0" | <digit-nonzero> <digit>* ) ( "." <digit>+ )?

<string> ::= '"' <char>* '"'

<boolean> ::= "true" | "false"

<identifier> ::= (<letter> | "_") (<letter> | <number> | "_")*

<letter> ::= [a-zA-Z]

<digit> ::= [0-9]

<digit-nonzero> ::= [1-9]

<char> ::= [^"]

```