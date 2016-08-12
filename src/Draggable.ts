import * as React from 'react';
import * as ReactDOM from 'react-dom'; 


export interface DraggableProps {
    className?:string;
    initialX?:number;
    initialY?:number;
}

export class Draggable extends React.Component<DraggableProps,any>{
    drag:any;

    constructor(props:DraggableProps){
        super(props);
        this.state = {};
        this._onDrag = this._onDrag.bind(this);  
        this.drag = null;
    }

    _onDrag(){
        let e:any = d3.event,
            t = e.translate,
            z = e.scale,
            el = ReactDOM.findDOMNode(this.props.children as HTMLElement);
        d3.select(el)
            .attr('transform','translate('+[t[0]+'px',t[1]+'px']+')');
    }

    componentDidMount(){
        this.drag = d3.behavior.drag()
            .on('zoom',this._onDrag); 
        d3.select(this.props.children as HTMLElement)
            .call(this.drag);
    }

    render(){
        let props = this.props; 
        return (props.children as React.ReactElement<any>);
    }
}