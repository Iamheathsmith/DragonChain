import React from 'react';
import KeyValue from '../KeyValue/index'
// import { isRegExp } from 'util';
import styles from './ParentComponent.scss';

class ParentComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 0,
        key: '',
        value: ''
      }],
    };

  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.handleJSONBuilder(this.state.data)
    this.setState({
      data: [{
        idx: 0,
        key: '',
        value: ''
      }],
    });
  }

  handleJSONBuilder = (data) =>{
    const jsonObj = {};
    data.forEach(item => {
      jsonObj[item.key] = item.value
    });
    console.log(JSON.stringify(jsonObj))
  }

  handleChange = (event) =>{
    let {name,value,id} = event.target;
    const newState = this.state.data;
    newState[id][name] = value,
    this.setState({
      data: newState
    });
  }

  handleAdd = (event) => {
    let num = this.state.data.length
    const newState = this.state.data;
    const added = [...newState, {id: num,key: '',value: ''}]
    this.setState({
      data: added
    });
  }

  handleDelete = (event) => {
    let id = event.target.value;
    const newState = this.state.data;
    let removed = newState.length > 1 ?
      newState.filter(item => item.id !== parseInt(id)) :
      [{id: 0,key: '',value: ''}]
    this.setState({
      data: removed
    });
  }

  render(){
    return(
      <div className={styles.parentComp}>
        <div className={styles.header}>
          <p>This is the parent component</p>
        </div>

        <div className={styles.form}>
        <p className={styles.header_info}>This is your header</p>
        <button className={styles.add_btn} onClick={this.handleAdd}>+</button>
          {this.state.data ? this.state.data.map((item, idx) =>
              <React.Fragment key={idx}>
                <KeyValue
                  value={this.state.data[idx]}
                  onChange={this.handleChange}
                  onDelete={this.handleDelete}
                  formIdx={idx}
                />
              </React.Fragment>)
            :
            undefined
            }
          <button className={styles.sub_btn} onClick={this.handleSubmit}>Submit</button>
        </div>

      </div>
    );
  }
}

export default ParentComponent;
