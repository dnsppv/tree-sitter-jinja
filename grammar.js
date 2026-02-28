module.exports = grammar({
  name: "jinja",

  rules: {
    source: ($) =>
      repeat(
        choice($.jinja_expression, $.jinja_statement, $.jinja_comment, $.text),
      ),

    jinja_expression: ($) => seq("{{", /.*?/, "}}"),

    jinja_statement: ($) => seq("{%", /.*?/, "%}"),

    jinja_comment: ($) => seq("{#", /.*?/, "#}"),

    text: ($) => /[^ \{\}%#]+/,
  },
});
