import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import './app.scss';
import * as Adal from './adal/adal-request';
import Groups from './groups/Groups';



var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="ms-font-xxl">My groups</h1>
        <Groups />
      </div>
    );
  }
});

// Adal.processAdalCallback();

if (window === window.parent) {
  ReactDOM.render(<App />, document.getElementById('app'));
}


// if (window === window.parent) {
//     ReactDOM.render(
//         <Hello compiler="TypeScript" framework="React" />,
//         document.getElementById("app")
//     );
// }