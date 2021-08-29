# Vue.js History Cache
Vue.js 2 Composition API library for caching to `History.state`.

<img src="https://user-images.githubusercontent.com/32030486/131253468-fbf2dfc3-3417-4cf5-a7bf-9fcbf26f1cb7.gif" alt="vue-history-cache-demo" style="max-width:100%;">

## Installation
```bash
$ yarn add vue-history-cache
$ npm install --save vue-history-cache
```
## Usage
To use Vue History Cache, you first need to call to `useHistoryStateCache` on your components.

If set the option `init` to `true`, the data cached in `history.state` will be reflected in` ref` or `reactive`, and it will cache the data in `history.state` every time the page transitions and the `onUnload` event is fired.

```js
// MyComponent.vue

import { useHistoryStateCache } from "vue-history-cache";
// ...

  setup() {
    const state = reactive({ isOpen: false });
    const inputRef = ref(null);

    // If you want to initialize with the method call, set the option 'init' to 'true'
    const option = { init: true };
    // Pass here the Ref or Reactive you want to cache, and option
    useHistoryStateCache({ state, ref }, option);

    return { state, inputRef };
  }
```

You can call the method returned from `useHistoryStateCache` to reflect the cached data to the component or cache the component data in `History.state` at any given time.


```js
// MyComponent.vue

import { useHistoryStateCache } from "vue-history-cache";
// ...

  setup() {
    const state = reactive({ isOpen: false });
    const inputRef = ref(null);

    const {
      pickHistoryStateCache,
      cacheRefsToHistoryState
    } = useHistoryStateCache({ state, ref }, option);

    // Reflecting cached data in components
    pickHistoryStateCache();

    onUnmounted(() => {
      // Cache the data in the component in 'History.state`
      cacheRefsToHistoryState();
    });

    return { state, inputRef, pickHistoryStateCache, cacheRefsToHistoryState };
  }
```
