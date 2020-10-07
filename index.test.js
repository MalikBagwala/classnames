const classNames = require(".");

it("Core Tests", () => {
  expect(classNames("abc", "123")).toEqual("abc 123");
  expect(classNames("abc 123")).toEqual("abc 123");
  expect(classNames("abc", { 123: true })).toEqual("abc 123");
  expect(classNames("")).toEqual(undefined);
  expect(classNames()).toEqual(undefined);
  expect(classNames(null, "123", "abc")).toEqual("123 abc");
  expect(classNames(0, false, "abc", undefined, "123", NaN)).toEqual("abc 123");
  expect(classNames("abc", "123", { abc: true })).toEqual("abc 123");
  expect(classNames("abc", "123", ["xyz", "pqr"])).toEqual("abc 123");
  expect(classNames("abc", "123", { [`xyz-${1 + 2}`]: true })).toEqual(
    "abc 123 xyz-3"
  );
});
