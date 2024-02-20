import {keywords, operators, punctuators} from './constants';
import {escapeAndJoin, removeComments, scanByRegex} from './lib';
import {sample_code} from './samples';
import {SymbolTableEntry, TokenType} from './types';

(function entry() {
  const tokens = scan(sample_code);
  console.log({tokens, tokenCount: tokens.length});
})();

function scan(code: string): SymbolTableEntry[] {
  code = removeComments(code);
  const symbol_table: SymbolTableEntry[] = [];
  let pos = 0;

  while (pos < code.length) {
    const entry: SymbolTableEntry | void = scanPos(code.slice(pos));

    if (entry) {
      pos += entry.position;
      symbol_table.push({...entry, position: pos});
    } else {
      pos++;
    }
  }

  return symbol_table;
}

function scanPos(partial: string): SymbolTableEntry | void {
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

function scanConstant(partial: string): SymbolTableEntry | void {
  return scanByRegex(partial, /-?\b\d+(\.\d+)?\b/y, TokenType.CONST);
}

function scanLiteral(partial: string): SymbolTableEntry | void {
  const stringOrChar = /"[^"\\]*(\\.[^"\\]*)*"|'[^'\\]*(\\.[^'\\]*)*'/y;
  return scanByRegex(partial, stringOrChar, TokenType.LIT);
}

function scanOperator(partial: string): SymbolTableEntry | void {
  const regex = new RegExp(escapeAndJoin(operators), 'y');
  return scanByRegex(partial, regex, TokenType.OPR);
}

function scanKeyword(partial: string): SymbolTableEntry | void {
  const joined = keywords.join('|');
  return scanByRegex(partial, new RegExp(`${joined}\b`, 'y'), TokenType.KEY);
}

function scanIdentifier(partial: string): SymbolTableEntry | void {
  return scanByRegex(partial, /[a-zA-Z_][a-zA-Z0-9_]*/y, TokenType.ID);
}

function scanDirective(partial: string): SymbolTableEntry | void {
  return scanByRegex(partial, /^#[^\n]+/my, TokenType.DIR);
}

function scanPunctuators(partial: string): SymbolTableEntry | void {
  const regex = new RegExp(escapeAndJoin(punctuators), 'y');
  return scanByRegex(partial, regex, TokenType.PUN);
}
