import * as React from 'react';
import * as Adal from '../adal/adal-request';
// import Loading from './Loading';
import Group from './Group';
import * as q from 'q';


export interface AppProps {

}

class Groups extends React.Component<AppProps, any> {


    private serverRequest;

    public componentDidMount() {
        var component = this;
        component.serverRequest = Adal.adalRequest({
            url: 'https://graph.microsoft.com/v1.0/me',
            // headers: {
            //     'Accept': 'application/json;odata.metadata=full'
            // }
        }).then(function (data) {
            console.log(data);
            console.log(data.displayName);
            
        }.bind(component));
    }

    public componentWillUnmount() {
        this.serverRequest.abort();
    }

    public render() {
        return (
            <div>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">

                    </div>
                </div>
            </div>
        );
    }
}

export default Groups;

