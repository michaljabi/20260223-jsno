const LR_PADDING = 8;


// CommonJS export (shortcut):
//exports.LR_PADDING = LR_PADDING;

//exports.otherStuff = 'other stuff';

// Żeby korzystać z CommonJS
// potrzebujemy JAWNIE wyexportować coś i jawenie zaimportować po 2 stronie.


// CommonJS export pełny wariant:
module.exports = {
    LR_PADDING: 8,
    otherStuff: 'other stuff'
}