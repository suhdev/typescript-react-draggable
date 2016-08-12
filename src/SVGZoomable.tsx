import * as  React from 'react';



export interface ZoomableProps {
    className?:string;
    initialX?:number;
    initialY?:number;
}

export class SVGZoomable extends React.Component<ZoomableProps,any>{
    x:number;
    y:number;
    initialX:number;
    initialY:number;
    originalX:number;
    originalY:number;
    dragging:boolean;
    dragAttempt:boolean;
    zoom:any;


    constructor(props:ZoomableProps){
        super(props);
        this.state = {};
        this.dragging = false;
        this.dragAttempt = false; 
        this.initialX = props.initialX || 0;
        this.initialY = props.initialY || 0;
        this._onZoom = this._onZoom.bind(this);  
        this.zoom = null;
    }

    _onZoom(){
        let e:any = d3.event,
            t = e.translate,
            z = e.scale,
            el = this.refs['transformCanvas'] as SVGGElement;
        d3.select(el)
            .attr('transform','translate('+t+') scale('+z+')');
         
    }

    componentDidMount(){
        this.zoom = d3.behavior.zoom()
            .on('zoom',this._onZoom); 
        d3.select(this.refs['reactZoomable'] as HTMLElement)
            .call(this.zoom);
    }

    render(){
        let props = this.props; 
        return (
            <g className={"react-zoomable "+(props.className?props.className:"")} ref="reactZoomable" key="reactZoomable">
                <g className="drag-canvas" ref="transformCanvas" key="transformCanvas">
                {props.children}
                </g>
            </g>
        );
    }
}