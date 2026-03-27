import { readFileSync } from "node:fs";
import { assert } from "@varavel/vdl-plugin-sdk/utils/misc";

// This file is only a tiny example of extra fixture checks.
// Keep files like this small and focused.

const helloTxtGot = readFileSync("gen/hello.txt", "utf-8");
const helloTxtExpected = "Hello from VDL Plugin";

assert(
  helloTxtGot === helloTxtExpected,
  `hello.txt content mismatch. Expected: "${helloTxtExpected}", got: "${helloTxtGot}"`,
);
