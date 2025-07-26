## Class: Proposta de Arquitetura e Pastas

https://github.com/filipedeschamps/tabnews.com.br/issues/12

minute: 02

Architecture: defined by the scope of components where each component start end finishes together its interections.

## Class: Creating a "Real Test"

🔗 [Referência no Stack Overflow (em português)](https://pt.stackoverflow.com/questions/399678/qual-%C3%A9-a-diferen%C3%A7a-entre-export-e-export-default)

### `export default`

When using `export default`, you **don’t need to import it with the same name** used in the declaration.

**Example:**

```js
// module.js
export default class Helper {}

// anotherFile.js
import CustomName from "module-name";

const a = new CustomName();
```

### `Named Export`

When using `named exports`, you must import using the exact same name used in the declaration.

**Example:**

```js
// module.js
export class Helper {}
export class Logger {}

// anotherFile.js
import { Helper, Logger } from "module-name";
```

### `CommonJS vs. ES Modules`

🔗 [Understanding CommonJS vs. ES Modules in JavaScript](https://www.syncfusion.com/blogs/post/js-commonjs-vs-es-modules)

When you don't define `"type": "module"` in your `package.json`, your project uses the CommonJS module system.

```js
// logger.js
function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${message}`);
}

exports.log = log;
```

However, when you define `"type": "module"` in your `package.json`, or use the `.mjs` file extension, your project uses the ES Module (ECMAScript 6) system.

```js
// logger.mjs
export function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${message}`);
}
```

### `URL Path versioning, Hearder Versioning`

for API update.

### `DotEnv`

### `Remover dados confidenciais de um repositório`

https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

### `Absolute imports e baseURL`
