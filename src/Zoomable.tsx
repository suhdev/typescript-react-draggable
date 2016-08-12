import * as  React from 'react';

export interface ZoomableProps {
    className?:string;
}

export class Zoomable extends React.Component<ZoomableProps,any>{
    zoom:any;

    constructor(props:ZoomableProps){
        super(props);
        this.state = {};
        this._onZoom = this._onZoom.bind(this);  
        this.zoom = null;
    }

    _onZoom(){
        let e:any = d3.event,
            t = e.translate,
            z = e.scale,
            el = this.refs['transformCanvas'] as HTMLElement;
        d3.select(el)
            .attr('transform','translate('+[t[0]+'px',t[1]+'px']+') scale('+z+')');
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
            <div className={"react-zoomable "+(props.className?props.className:"")} ref="reactZoomable" key="reactZoomable">
                <div className="drag-canvas" ref="transformCanvas" key="transformCanvas">
                {props.children}
                </div>
            </div>
        );
    }
}