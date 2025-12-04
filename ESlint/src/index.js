import { randomUUID } from "crypto";

console.log("🚀 ESBuild fonctionne parfaitement !");
console.log("UUID généré :", randomUUID());

function greet(name) {
  return `Hello ${name}, ton build ESBuild est OK !`;
}

console.log(greet("Marco"));
