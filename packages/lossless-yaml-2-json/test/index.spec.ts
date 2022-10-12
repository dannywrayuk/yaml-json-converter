import { ytoj, jtoy } from "../src/index";
import { testCase } from "./resources/types";
import { testCases } from "./resources/testCases";

describe("When parsing yaml with", () => {
  testCases.forEach((x: testCase) =>
    it(x.description, () => {
      const json = ytoj(x.yaml);
      expect(json).toEqual(x.json);
    })
  );
});

describe("When parsing json with", () => {
  testCases.forEach((x: testCase) =>
    it(x.description, () => {
      const yaml = jtoy(x.json);
      expect(yaml).toEqual(x.yaml);
    })
  );
});
