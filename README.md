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
      <Icon name="Power" />
    </div>
  );
};
```

Using the `Icon` wrapper component above renders the following:

```html
<div style="margin: 0; padding: 0;">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-power"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.25"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <line x1="12" y1="4" x2="12" y2="12" />
  </svg>
</div>
```

### Using the `TablerIcons` collection

```jsx
import React from "react";
import { Icon, TablerIcons } from "react-tabler-icons";

const UsingWrapper = () => {
  return (
    <div>
      <TablerIcons.Power />
    </div>
  );
}
```

Using the `TablerIcons` collection above renders the following:

```html
<div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-power"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.25"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <line x1="12" y1="4" x2="12" y2="12" />
  </svg>
</div>
```

## License

MIT © [alex-bello](https://github.com/alex-bello)
