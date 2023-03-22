
const { default: test } = require("node:test")
const two = require("/.vending.js")

test("returns number 2", () => {
    expect(two().toBe(2))
})