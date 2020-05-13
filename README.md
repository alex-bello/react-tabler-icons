# react-tabler-icons

> Port of tabler/tabler-icons to a more React-friendly component library.

![GitHub](https://img.shields.io/github/license/alex-bello/react-tabler-icons)
![npm (scoped)](https://img.shields.io/npm/v/@alex-bello/react-tabler-icons)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save @alex-bello/react-tabler-icons
```

## Examples

### Using the `Icon` wrapper component

```jsx
import React from "react";
import { Icon, TablerIcons } from "react-tabler-icons";

const UsingCollection = () => {
  return (
    <div>
      <Icon name="Arrow" />
    </div>
  );
};
```

### Using the `TablerIcons` collection

```jsx
import React from "react";
import { Icon, TablerIcons } from "react-tabler-icons";

const UsingWrapper = () => {
  return (
    <div>
      <TablerIcons.Arrow />
    </div>
  );
}
```

## License

MIT © [alex-bello](https://github.com/alex-bello)
