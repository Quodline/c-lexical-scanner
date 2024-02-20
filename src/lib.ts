import {SymbolTableEntry, TokenType} from './types';

export function removeComments(code: string): string {
  // Regular expression to match both single-line and multi-line comments
  const commentRegex = /\/\*[\s\S]*?\*\/|\/\/.*$/gm;

  return code.replace(commentRegex, '');
}

export function scanByRegex(
  str: string,
  regex: RegExp,
  type: TokenType
): SymbolTableEntry | void {
  const matched = regex.exec(str);

  if (matched) {
    return {
      type,
      position: matched[0].length,
      value: matched[0],
    };
  }
}

export function escapeAndJoin(arr: string[]) {
  return arr
    .map(symbol => symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
}
