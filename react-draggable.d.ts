///<reference path="./typings/react/react.d.ts"/>
declare module "react-draggable"{
    import {Component} from 'react'; 

    export interface DraggableProps {
        className?:string;
    }

    export class Draggable extends Component<DraggableProps,any>{
        drag:any;
        constructor(props:DraggableProps);
        _onDrag():void;
        componentDidMount():void;
    }

    export interface SVGDraggableProps {
        className?:string;
    }

    export class SVGDraggable extends Component<SVGDraggableProps,any>{
        drag:any;
        constructor(props:SVGDraggableProps);
        _onDrag():void;
        componentDidMount():void;
    }

    export interface ZoomableProps {
        className?:string;
    }

    export class Zoomable extends Component<ZoomableProps,any>{
        zoom:any;

        constructor(props:ZoomableProps);
        _onZoom():void;
        componentDidMount():void;
    }

    export class SVGZoomable extends Component<ZoomableProps,any>{
        zoom:any;
        constructor(props:ZoomableProps);
        _onZoom():void;
        componentDidMount():void;
    }
}