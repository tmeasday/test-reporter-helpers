// Run this function *before* injecting your test reporter HTML to the DOM.
// It simply hides all existing DOM elements without removing them
export const hideApp = () => {
  $('body > *').css({display: 'none'});
  document.head.title = "Tests";
}

// Use this to kill *all* CSS from the app apart from CSS added by your reporter package.
// To allow us to do that, wrap your reporter CSS in a delimiter that we parse for, e.g.
//
// ````
// .xxxReporterCss { color: white; }
// /* your styles */
// .xxxReporterCss { color: white; }
// ```
//
export const hideOtherCSS = (delimiter = 'xxxReporterCss') => {
  inRange = false;
  _.each(document.styleSheets, (sheet) => {
    var rules = _.filter(sheet.cssRules, (r) => {
      if (r.selectorText && r.selectorText.match(delimiter)) {
        inRange = !inRange;
      };
      return inRange;
    });

    var styles = _.pluck(rules, 'cssText').join('\n');

    $('head').append('<style>' + styles + '</style>');
  });

  $('head link[rel=stylesheet]').remove();
};

