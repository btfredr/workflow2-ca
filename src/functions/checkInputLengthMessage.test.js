import checkInputLengthMessage from './checkInputLengthMessage';

test("input length is valid", function () {
    expect(checkInputLengthMessage("dddd")).toBe(false);
})