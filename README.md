# typescript-react-draggable 

A library that provides Draggable and Zoomable React components written in TypeScript:
1. Draggable: adds drag behavior to its child component given that the child component is an HTMLElement with arbitrary content.  
2. SVGDraggable: adds drag behavior to its child component given that the given component is an SVG component. 
3. Zoomable: adds zoom behavior to HTML components.  
4. SVGZoomable: adds zoom behavior to SVG components. 


## Dependences
D3: this library uses d3.behavior.drag, and d3.behavior.zoom to add the behavior to react components. 

## Example

```javascript

import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import {Draggable} from 'typescript-react-draggable';

ReactDOM.render(
    <Draggable>
        <div className="draggable-element">Drag Me</div>
    </Draggable>
,document.getElementById('TestCanvas')); 


import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import {SVGDraggable} from 'typescript-react-draggable';

ReactDOM.render(
    <SVGDraggable>
        <circle className="draggable-element" />
    </SVGDraggable>,document.getElementById('SVGCanvas')); 

//Zoomable 
import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import {Zoomable} from 'typescript-react-draggable';

ReactDOM.render(
    <Zoomable>
        <div className="element-1">Button</div>
        <div className="element-2">Something else</div>
    </Zoomable>
,document.getElementById('TestCanvas')); 


import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import {SVGZoomable} from 'typescript-react-draggable';

ReactDOM.render(
    <SVGZoomable>
        <circle className="element el-1" />
        <circle className="element el-2" />
    </SVGZoomable>,document.getElementById('SVGCanvas')); 


```


## Notes
Both Draggable and SVGDraggable do not add extra HTML/SVG elements to the DOM, but rather apply the drag behavior to the wrapped child element. 


### Future work
* Allow Draggable component to accept multiple top-level children such that all children receive the behavior.




Suhail Abood &copy; 2016  