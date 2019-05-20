import React from 'react';
import './App.css';
import AppForm from './AppForm'
import AppList from './AppList'
import AppFooter from './AppFooter'

class App extends React.Component{
    state = {
        choosevalue:1,
        data:this.props.data
    };
    OnAddTodoItem(newItem){
        let newdata = this.state.data.concat(newItem);
        this.setState({data:newdata})
    }

    ChooseValue(id){
        this.setState({choosevalue:id})
    }

    AllChangeComplete(id){
        let newdata = this.state.data.map((item,index)=>{
            if(item.id === id){
                item.complete = !item.complete
            }
            return item;
        });

        this.setState({data:newdata})
    }

    AllOnDeleteItem(id){
        console.log(id);
        let newdata = this.state.data.map(item=>{
            console.log(item);
            if(item.id === id){
                item.deleteFlag = true
            }
            return item;
        })
        this.setState({data:newdata})
    }
    render() {
      return(
          <div className='ui comments'>
              <h1>My Todo with React</h1>
              <div className='ui divider'></div>
              <AppForm
                AddTodoItem={this.OnAddTodoItem.bind(this)}
              />
              <AppList data={this.state.data}
                    choosevalue={this.state.choosevalue}
                    ChangeCompleteTop={this.AllChangeComplete.bind(this)}
                    DeleteItemTop={this.AllOnDeleteItem.bind(this)}
              />
              <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}/>
          </div>
      )
    }
}
export default App;
