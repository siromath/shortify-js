# shortify-js

You can write JavaScript objects shorter for browser.

## Install

```bash
npm install --save shortify-js
```

## Example

```javascript
import s from 'shortify-js';

s.d.write('Hello'); // document.write('Hello');
s.l('Good'); // console.log('Good');
```

## documentation

* d - `document`
* w - `window`
* c - `console`
* m - `Math`
* id - `document.getElementById()`
* class - `document.getElementsByClassName()`
* tag - `document.getElementsByTagName()`
* q - `document.querySelector()`
* qa - `document.querySelectorAll()`
* l - `console.log()`
* iw - `window.innerWidth`
* ih - `window.innerHeight`
* ow - `window.outerWidth`
* oh - `window.outerHeight`