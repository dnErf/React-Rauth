export default function(classNames) {
  const classes = classNames
  const globalClass = {
    ifError : 'bg-error ma1 ph3 pv1 rounded font--light' 
  }
  return function(block) {
    return {className:classes[block]||globalClass[block]}
  }
}

//
// let appClassNames = { flexContent : 'flex content-between' }
// let appClass = initStyleClass(appClassNames)
// <div {...appClass('flexContent')}>
//

/*

> a func that accept a list of style and return an object that has 
className attribute and the coresponding style to it.

> this was define because declaring functional css style is kinda long
and was not pleasant to the eye

>  alternative to this was to use classname repo or stlyled components

- repo classnames can still do the job
- need to rewrite similar to classnames that accepts condition but still looks for the class

*/