import * as React from 'react';

export interface AppProps {
}

class Loading extends React.Component<AppProps, any> {
    render() {
        return (
            <div>
                <div className="spinner">
                    <img src={'images/ajax-loader.gif'} /> <span className="ms-font-s-plus">Loading...</span>
                </div>
            </div>
        );
    }
}

export default Loading;
