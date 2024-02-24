import {keywords, operators, punctuators} from './constants';
import {
  escapeAndJoin,
  readFileContents,
  removeComments,
  scanByRegex,
} from './lib';
import {Token, TokenType} from './types';

export async function scan(
  sourceFilePath: string,
  logOutput = false
): Promise<Token[]> {
  const code = removeComments(await readFileContents(sourceFilePath));
  const tokens: Token[] = [];
  let pos = 0;

  while (pos < code.length) {
    const entry: Token | void = scanPos(code.slice(pos));

    if (entry) {
      tokens.push({...entry, position: pos});
      pos += entry.position;
    } else {
      pos++;
    }
  }

  if (logOutput) console.log({tokens, tokenCount: tokens.length});

  return tokens;
}

function scanPos(partial: string): Token | void {
  return (
    scanLiteral(partial) ?? // First call to avoid scanning inside a literal
    scanDirective(partial) ??
    scanConstant(partial) ??
    scanOperator(partial) ??
    scanPunctuators(partial) ??
    scanKeyword(partial) ??
    scanIdentifier(partial) // After keyword to avoid reserved identifier
  );
}

function scanConstant(partial: string): Token | void {
  return scanByRegex(partial, /-?\b\d+(\.\d+)?\b/y, TokenType.CONST);
}

function scanLiteral(partial: string): Token | void {
  const stringOrChar = /"[^"\\]*(\\.[^"\\]*)*"|'[^'\\]*(\\.[^'\\]*)*'/y;
  return scanByRegex(partial, stringOrChar, TokenType.LIT);
}

function scanOperator(partial: string): Token | void {
  const regex = new RegExp(escapeAndJoin(operators), 'y');
  return scanByRegex(partial, regex, TokenType.OPR);
}

function scanKeyword(partial: string): Token | void {
  const joined = keywords.join('|');
  return scanByRegex(partial, new RegExp(`${joined}\b`, 'y'), TokenType.KEY);
}

function scanIdentifier(partial: string): Token | void {
  return scanByRegex(partial, /[a-zA-Z_][a-zA-Z0-9_]*/y, TokenType.ID);
}

function scanDirective(partial: string): Token | void {
  return scanByRegex(partial, /^#[^\n]+/my, TokenType.DIR);
}

function scanPunctuators(partial: string): Token | void {
  const regex = new RegExp(escapeAndJoin(punctuators), 'y');
  return scanByRegex(partial, regex, TokenType.PUN);
}
