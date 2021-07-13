# sotable

A tool to make any HTML table sortable by the user.

## See it in action

Visit the [codepen](https://codepen.io/ulfschneider/pen/MWJdEPZ).

## Usage

Download [`sotable-min.js`](https://raw.githubusercontent.com/ulfschneider/sotable/master/sotable-min.js) from GitHub and put that file into your HTML page. Example: 


HTML to embed sotable-min.js into a web page.
~~~html
<script src="sotable-min.js"></script>
<script>
addEventListener('load', () => sotable()); //activate sotable functionalty on load
</script>
~~~~

To experiment and dive deeper, it´s best to clone the [entire repository](https://github.com/ulfschneider/sotable) and investigate the `index.html`, which serves as an example. sotable is also available as an [npm package](https://www.npmjs.com/package/sotable). 


Install sotable npm package
~~~shell
npm i sotable
~~~

Use sotable npm package
~~~javascript
const sotable = require('sotable');
sotable.run();
~~~

## Function

sotable will query all tables on a web page and turn each table with `<th>` elements in the first table row into a sortable table. An explanation of the sort behavior will be added to the table `<caption>`. If the table doesn´t have a caption, it will be created.

## Settings

sotable can run without any configuration, like in the example above. Nevertheless sotable can be called with a settings object. Example:

Calling sotable with a settings object
~~~html
<script src="sotable-min.js"></script>
<script>
//call sotable with a settings object
//the shown values are the default values
addEventListener('load', () => sotable({
    indicatorAsc: 'ᐃ',
    indicatorDsc: 'ᐁ',
    sortHint: 'Sort the table by clicking on a column heading.',
    restoreHint: 'Restore the original order by clicking <button>Restore Order</button>.',
    whiteList: '',
    blackList: ''
})); //activate sotable functionalty on load
</script>
~~~

Explanation of the settings:
- `indicatorAsc`: A symbol to indicate that a table column is sorted in ascending order.
- `indicatorDsc`: A symbol to indicate that a table column is sorted in descending order.
- `sortHint`: The text to add to the table caption to inform the user how to sort the table.
- `restoreHint`: The text to add to the table caption to inform the user how to revert sorting to the initial state. The `<button>` element will be injected with functionality to revert the sorting.
- `whiteList`: A selector pattern (see *[Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)*), separated by comma, to select only those tables for sorting that fall into the whitelist query.
- `blackList`: A selector pattern, separated by comma, to not select those tables for sorting that fall into the whitelist query. `blackList` has higher priority than `whiteList`. The selector `.noso` is generally available, even without adding it to the `blackList`. 

## Accessibility

Many design decisions for proper accessibility of sotable stem from *[Sortable table columns](https://adrianroselli.com/2021/04/sortable-table-columns.html)* by Adrian Roselli. Among those are

- Use the table caption to indicate the table is sortable.
- Use aria-sort to indicate what column is sorted into what direction.
- Use buttons (and not links) inside of the `<th>` elements to activate sorting. (Generally, use buttons for performing an action on the site and use links for sending the user somewhere. Source: *[Six ways to make your site more accessible](https://ulf.codes/2020-08-31-six-ways-to-make-your-site-more-accessible/#markup)*).

## References 

sotable is influenced by *[JavaScript Sort HTML Table](https://www.delftstack.com/howto/javascript/javascript-sort-html-table/)*, which has a neat way of leveraging selectors for sorting, like `tr:nth-child(n+2)`. In this context, please refer to *[How nth-child works](https://css-tricks.com/how-nth-child-works/)* and *[:nth tester](https://css-tricks.com/examples/nth-child-tester/)*.

