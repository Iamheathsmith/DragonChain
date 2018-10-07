import React from 'react';
import styles from './KeyValue.scss';

class KeyValue extends React.Component{
  render(){
    return(
      <div className={styles.form}>
          <input className={styles.input}
            id={this.props.formIdx}
            type='text'
            name='key'
            placeholder='  key'
            value={this.props.value.key}
            onChange={this.props.onChange}
          />
          <input className={styles.input}
            id={this.props.formIdx}
            type='text'
            name='value'
            placeholder='  value'
            value={this.props.value.value}
            onChange={this.props.onChange}
          />
          <button className={styles.delete_btn} value={this.props.formIdx} onClick={this.props.onDelete}>X</button>
      </div>
    );
  }
}

export default KeyValue;
