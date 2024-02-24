export interface Token {
  type: TokenType;
  position: number;
  value: string;
}

export enum TokenType {
  CONST = 'constant',
  ID = 'identifier',
  KEY = 'keyword',
  LIT = 'literal',
  OPR = 'operator',
  PUN = 'punctuator',
  DIR = 'directive',
}
