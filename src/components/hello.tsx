import * as React from "react";
import { Button } from 'office-ui-fabric-react/lib/Button';
import { adalRequest, processAdalCallback } from '../adal/adal-request';

export interface HelloProps { compiler: string; framework: string; }

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework} !</h1>; 

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {

    render() {
        return (
            <div >
                <h1>Hello from {this.props.compiler} and {this.props.framework} again!</h1>
            </div >
        );
    }
}