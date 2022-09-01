// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CreateUser from "./components/create-user";
import UserList from "./components/user-list";
import { Component } from "react";
import ButtonGroup from "./ButtonGroup";

class App extends Component {
  constructor(props) {
    super(props);
    this.operationType = {
      create: "CREATE",
      view: "VIEW",
      delete: "DELETE"
    }
    this.state = {operationType: this.operationType.create}
  }

  changeOperation(event) {
    switch (event.target.name) {
      case this.operationType.create:
        this.setState({ operationType: this.operationType.create });
        break;
      case this.operationType.view:
        this.setState({ operationType: this.operationType.view });
        break;
      case this.operationType.delete:
        this.setState({ operationType: this.operationType.delete });
        break;
      default:
        break;
    }
  }

  displayContent = () => {
    switch (this.state.operationType) {
      case this.operationType.create:
        return <CreateUser />;
      case this.operationType.view:
        return <UserList />;
      case this.operationType.delete:
        return <UserList action={this.state.operationType} />
      default:
        return null;
    }
  }

  render() {
    return (
      <div className='app'>
        <header className='p-2 bg-secondary mb-5'>
          <h2 className='text-light'>User Details</h2>
        </header>
        <ButtonGroup selectButton={this.state.operationType} onClick={this.changeOperation.bind(this)} buttons={["CREATE", "VIEW", "DELETE"]}></ButtonGroup>
        {this.displayContent()}
      </div>
    );
  }
    
}

export default App;
