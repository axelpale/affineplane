# gendocs

Generate API documentation from code.

Usage: `$ node gendocs/index.js`

Customisation:
- see `gendocs/index.js` for doc title and intro text.
- see `gendocs/prettyText.js` for keyword substitution.

Syntax:
- Triple slash `///` to exclude comment from documentation.
- Double dot `..` in the beginning of comment continues line.
- If a parameter list contains single word, it will be `emphasised`.
