# Monotone Framework Analyzer

[React](https://reactjs.org/) webapp that analyzes a monotone framework on a
WHILE program.

Written in [typescript](https://www.typescriptlang.org/),
it uses [parsimmon](https://github.com/jneen/parsimmon) to parse the program and
[viz.js](http://viz-js.com/) to generate the control flow graph. The app is
hosted on [GitHub Pages](https://meitinger.github.io/FrameworkAnalyzer/).

This project was created as part of a master's course in computer science at [UIBK](https://informatik.uibk.ac.at/).


## Usage:

First enter a WHILE program according to the following grammar:
(For ease of reading, white-spaces are not noted in the grammar.)

```bnf
<program>       ::= <block>
<block>         ::= <sequence> | "(" <sequence> ")"
<sequence>      ::= <statement> [<separator> <sequence>]
<separator>     ::= "\n" | ";"
<statement>     ::= "skip"
                    | <variable> ":=" <expression>
                    | "if" <condition> "then" <block> "else" <block>
                    | "while" <condition> "do" <block>
<variable>      ::= /[a-z_]+/
<expression>    ::= <constant>
                    | <variable>
                    | <expression> <operator> <expression>
                    | "(" <expression> ")"
<operator>      ::= "+" | "-" | "*" | "/"
<constant>      ::= ["-"] /[0-9]+/
<condition>     ::= "true"
                    | "false"
                    | "not" <condition>
                    | <condition> <combinator> <condition>
                    | <expression> <comparer> <expression>
                    | "(" <condition> ")"
<combinator>    ::= "and" | "or"
<comparer>      ::= "<" | ">" | "<=" | ">=" | "==" | "!="
```

If the program is valid, each statement is labelled automatically and the
label is shown inline in the editor. The flow graph is drawn as well.

The program will be run and the input values of variables can be adjusted in
the corresponding card.
Cards can be rearranged by dragging them by their headers.

In the framework card, enter the code for the monotone framework or pick one
of the predefined frameworks.
The code has to be in [typescript](https://www.typescriptlang.org/) and can
make use of any JavaScript function. Have a look into
[`environment.d.ts`](https://github.com/Meitinger/FrameworkAnalyzer/blob/main/src/environment.d.ts)
for a list of additional functions and constants available to the framework.

The framework code must call `define` with a
[`Framework`](https://github.com/Meitinger/FrameworkAnalyzer/blob/main/src/framework.d.ts)
object. Check out the predefined frameworks for sample code.

Once the analysis is complete, the corresponding card shows the entry and exit
states of each labelled statement.
