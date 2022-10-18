validator({
  element: document.getElementById("first_name"),
  display: document.getElementById("first_name--display"),
  validators: [
      {
          kind: "tooShort",
          message: "⚠ Too short! (min: 3 chars)"
      }
  ]
})

validator({
  element: document.getElementById("last_name"),
  display: document.getElementById("last_name--display"),
  validators: [
    {
      kind: "tooShort",
      message: "⚠ Too short! (min: 3 chars)"
    }
  ]
})

validator({
  element: document.getElementById("email"),
  display: document.getElementById("email--display"),
  validators: [
    {
      kind: "typeMismatch",
      message: "⚠ Wrong format (e.g: foo@bar.com)"
    },
    {
      kind: "tooShort",
      message: "⚠ Too short"
    }
  ]
})