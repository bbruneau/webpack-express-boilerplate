require("dotenv").config();
require("@babel/register")({
  extensions: [".js", ".jsx", ".ts", ".tsx"]
});
require("../src/server/index.ts");
