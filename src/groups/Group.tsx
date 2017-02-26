import * as React from 'react';

export interface AppProps {
    group:any
}

class App extends React.Component<AppProps, any> {
  render() {
    return (
      <div>
        <div className="ms-Persona">
        <div className="ms-Persona-imageArea">
          <div className="ms-Persona-initials ms-Persona-initials--blue">{this.props.group.displayName.substr(0, 2).toUpperCase()}</div>
          <img className="ms-Persona-image" src={this.props.group.imageUrl} />
        </div>
        <div className="ms-Persona-details">
          <div className="ms-Persona-primaryText" title={this.props.group.displayName}><a href={this.props.group.conversationsUrl} target="_blank">{this.props.group.displayName}</a></div>
          <div className="ms-Persona-secondaryText" title={this.props.group.description}>{this.props.group.description}</div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
