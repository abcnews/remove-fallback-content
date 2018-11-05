# Remove fallback content

A little code snippet that can be added to ease the use of fallback content which should be removed if the viewing environment supports javascript.

To use it, surround the content that should be removed in `#remove` and `#endremove` tags. For example:

```
#remove
Remove this one.
#endremove
But keep this one.
```

The 'removed' content will be hidden, but will be visible when the page is printed. The element immediately following the removed content (usually the javascript-based replacement) will be hidden when printed.

This project uses [aunty](https://github.com/abcnews/aunty).

## Authors

- Nathanael Scott ([scott.nathanael@abc.net.au](mailto:scott.nathanael@abc.net.au))
- Simon Elvery([elvery.simon@abc.net.au](mailto:elvery.simon@abc.net.au))
- Colin Gourlay([gourlay.colin@abc.net.au](mailto:gourlay.colin@abc.net.au))
