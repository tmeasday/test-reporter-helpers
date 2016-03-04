# Helpers to allow your test reporter to work in full-app mode in Meteor 1.3

When you run [full-app tests in Meteor 1.3](https://github.com/meteor/guide/blob/testing-modules-content/content/testing.md#full-app-testing), your app is loaded as usual, and it is the responsibility of the test driver to hide the app and display a test reporting chrome over the top.

This package gives you a couple of useful utilities to do so.

## Writing a test driver package

 - You should ensure your package is marked `testOnly`, to ensure any styles and code run by the package does not load in development or production mode.
 - You need to export a function called `runTests` from your package. This is the right point to call these utilities.

## API

### `hideApp(selector)`

Hide all children of the body that do not match a CSS `selector`. This would be the CSS selector that wraps your test reporter. You can call this before or after adding your reporter to the body.

### `hideOtherCSS(delimiter)`

In order to ensure that the app's CSS doesn't mess with your reporter's UI, you can use this technique to strip out all CSS that is not between two selectors that match `delimiter`.

For instance you could include a stylesheet in your package that looks like:

```css
.xxxReporterCss { color: white; }

#your-reporter {
  /* style away */
}

.xxxReporterCss { color: white; }
```

All other styles defined by the application will be stripped away. 

**NOTE** that your styles *must* be between the delimter. Specifically if you want to e.g. use styles from bootstrap, you'll need to manually add the bootstrap styles in your package rather depending on the `bootstrap` package.

Alternatively, you could do a style reset using `!important` rules. Note that your stylesheet will probably load midway through the CSS file.
