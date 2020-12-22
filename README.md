# FCType
[js] Return content type based on file name.

### Mime list
This module needs a mime-type list to retrieve the data.
You can obtain the list installing the kc-mime-list module.

### Install
```
npm install kc-mime-list
npm install kc-fctype
```

### Use
```js
var mimes = require('kc-mime-list');
var fctype = require('kc-fctype');
var ctype  = fctype('my-file.js', mimes);
console.log(ctype); // 'application/javascript'
```
