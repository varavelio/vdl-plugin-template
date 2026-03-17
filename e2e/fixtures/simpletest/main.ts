import { readFileSync } from "node:fs";
import type { PluginInput } from "@varavel/vdl-plugin-sdk";
import { misc } from "@varavel/vdl-plugin-sdk/utils";

// This file is only a tiny example of extra fixture checks.
// Keep files like this small and focused.

const helloTxt = readFileSync("gen/hello.txt", "utf-8");
const inputJson = readFileSync("gen/input.json", "utf-8");
const input = JSON.parse(inputJson) as PluginInput;

const expectedHelloTxt = "Hello from VDL Plugin";
misc.assert(
  helloTxt === expectedHelloTxt,
  `hello.txt content mismatch. Expected: "${expectedHelloTxt}", got: "${helloTxt}"`,
);

misc.assert(input.ir.types.length > 0, "IR types should not be empty");
