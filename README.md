Your Module Name(Pascal Camel)
---

<p align="right">
  <a href="https://npmjs.org/package/your-module-name">
    <img src="https://img.shields.io/npm/v/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/your-module-name">
    <img src="http://img.shields.io/travis/59naga/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/your-module-name/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/your-module-name">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/your-module-name">
    <img src="https://img.shields.io/gemnasium/59naga/your-module-name.svg?style=flat-square">
  </a>
</p>

> Description

Installation
---
```bash
npm install your-module-name --save
```

Development
---
Requirement global
* NodeJS v5.7.0
* Npm v3.7.1

```bash
git clone https://github.com/59naga/your-module-name
cd your-module-name
npm install

npm test
```

Releasing
---

```bash
npm run release
# ...
#     your-module-name.min.js  648 bytes       0  [emitted]  main
# your-module-name.min.js.map    5.02 kB       0  [emitted]  main
```

```html
<script src="release/your-module-name.min.js"></script>
<script>
  console.log(YourModuleName()); // foo
</script>
```

License
---
[MIT](http://59naga.mit-license.org/)
