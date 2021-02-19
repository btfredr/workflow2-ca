import checkInputLength from './checkInputLengthMessage';

test("value has no characters", function () {
    expect(checkInputLength("   ")).toBe(false);
})