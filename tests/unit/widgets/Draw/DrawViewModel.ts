import DrawViewModel from "../../../../src/widgets/Draw/DrawViewModel";

const { beforeEach, suite, test } = intern.getInterface("tdd");
const { assert } = intern.getPlugin("chai");

suite("widgets/Draw/DrawViewModel", () => {
  let vm: DrawViewModel;

  beforeEach(() => {
    vm = new DrawViewModel();
  });

  test("validate that name is correct", () => {
    assert.equal(vm.name, "Slagathor");
  });
});
