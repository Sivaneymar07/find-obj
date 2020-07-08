# find-obj
1) check whether given variable is a object

Disadvantage using typeof
typeof {} === object //true
typeof [] === object //true
typeof null === object //true

Advantage of using find-obj
find-obj.isObject([]) //false
find-obj.isObject({}) //false
find-obj.isObject(null) //false

## Installation
Install via NPM:

```bash
npm install find-obj

```

## Usage

#### javascript

```javascript

var checkVar = require("find-obj");

checkVar.convertstrtoarrnum(); // print and return true or false based on the given variable {} => true, [], null => false" 

```

#### TypeScript

```typescript

import * as checkVar from 'find-obj';

checkVar.isObject(); // print and return true or false based on the given variable {} => true, [], null => false" 


```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
