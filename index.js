import { createRequire } from "https://deno.land/std@0.168.0/node/module.ts";

const require = createRequire(import.meta.url);
require("./minimal-napi");
