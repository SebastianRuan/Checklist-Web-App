'use strict';

const e = React.createElement;


function App(){
  return(
    <div id="page" className="row">
      <SideBar/>
      <TodoContainer/>
    </div>
  )
}

class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="group-container" className="col-3">
        <div className="row row-cols-1">
          <ListItem/>
          <hr></hr>
          <ListItem/>
          <hr></hr>
          <ListItem/>
          <hr></hr>
          <ListItem/>
          <hr></hr>
          <ListItem/>
          <hr></hr>
        </div>
      </div>
    )
  }
}

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="group col"> <span>Group 1</span> </div>
    )
  }

}

class TodoContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(    
      <div id="check-list-container" className="col">
        <div className="row align-items-center justify-content-center" >
            <div className="col-6">
              <AddBar />
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>
            </div>
        </div>
      </div>
    )
  }

}

class AddBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <input type="text" id="new-todo" placeholder="Enter new todo..."></input>
    )
  }

}

class TodoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
    
    handleChange = (e) => {
      console.log("bilbo")
    }

    render(){
      return(
        <div>
          <input type="text" className="todo-item" disabled/>
          <EditButton/>
          <CompleteButton/>
          <DeleteButton/>
        </div>
        
      )
    }
 }

 class EditButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <i class="bi bi-pencil"/>
    )
  }
 }


 class CompleteButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <i class="bi bi-bookmark-check"/>
    )
  }
 }

 class DeleteButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <i class="bi bi-trash"/>
    )
  }
 }


 const domContainer = document.querySelector('#react');
 const root = ReactDOM.createRoot(domContainer);
 root.render(<App/>);
