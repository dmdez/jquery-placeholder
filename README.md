jQuery placeholder
==================

jQuery plugin that enables the placeholder attribute on input fields for unsupported browsers.  It's best to use the Modernizr library for detecting placeholder compatibility.  To create the placeholder affect, the plugin floats a label field on top of the input field giving the illusion of a placeholder.

## Markup
```
<input type="text" placeholder="Enter some text.." name="somefield">
```

## Usage
```
if (!Modernizr.input.placeholder) $('[placeholder]').placeholder();
```
### wrapperClass='placeholderwrap'
Defines the wrapper class which surrounds the input field and label.
