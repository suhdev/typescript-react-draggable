import * as React from 'react';
import * as ReactDOM from 'react-dom'; 


export interface SVGDraggableProps {
    className?:string;
}

export class SVGDraggable extends React.Component<SVGDraggableProps,any>{
    drag:any;

    constructor(props:SVGDraggableProps){
        super(props);
        this.state = {};
        this._onDrag = this._onDrag.bind(this);  
        this.drag = null;
    }

    _onDrag(){
        let e:any = d3.event,
            t = e.translate,
            z = e.scale,
            el = ReactDOM.findDOMNode(this.props.children as SVGGElement);
        d3.select(el)
            .attr('transform','translate('+t+')');
    }

    componentDidMount(){
        this.drag = d3.behavior.drag()
            .on('drag',this._onDrag); 
        d3.select(this.props.children as SVGGElement)
            .call(this.drag);
    }

    render(){
        let props = this.props; 
        return (props.children as React.ReactElement<any>);
    }
}