// Reserved word lists for various dialects of the language

export const reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
}

// And the keywords

const ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"

export const keywords = {
  5: ecma5AndLessKeywords,
  6: ecma5AndLessKeywords + " const class extends export import super"
}

export const keywordRelationalOperator = /^in(stanceof)?$/

// ## Character categories

// Test whether a given character code starts an identifier.

export function isIdentifierStart(code, astral) {
  if (code < 65) return code === 36
  if (code < 91) return true
  if (code < 97) return code === 95
  if (code < 123) return true
  return code >= 0xaa
}

// Test whether a given character is part of an identifier.

export function isIdentifierChar(code, astral) {
  if (code < 48) return code === 36
  if (code < 58) return true
  if (code < 65) return false
  if (code < 91) return true
  if (code < 97) return code === 95
  if (code < 123) return true
  return code >= 0xaa
}
