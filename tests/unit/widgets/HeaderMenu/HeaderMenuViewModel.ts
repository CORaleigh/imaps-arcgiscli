import HeaderMenuViewModel from "../../../../src/widgets/HeaderMenu/HeaderMenuViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/HeaderMenu/HeaderMenuViewModel", () => {
  let vm: HeaderMenuViewModel;

  beforeEach(() => {
    vm = new HeaderMenuViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
