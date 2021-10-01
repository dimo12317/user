import style from './Note.module.css'
import React from 'react'
import {UpdateName, UpdateTag, UpdateText, UpdateDeleteNote, UpdateFindTagInText} from './../../../store/dispatch/dispatch'

class Note extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
        this.open = this.open.bind(this);
    }

    open(){
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {

        let NewName = () => {
            this.props.dispatch(UpdateName(inputName.current.value, this.props.id))
        }

        let NewTag = () => {
            this.props.dispatch(UpdateTag(inputTag.current.value, this.props.id))
        }

        let NewText = () => {
            this.props.dispatch(UpdateText(inputText.current.value, this.props.id))
        }

        let DeleteNote = () => {
            this.props.dispatch(UpdateDeleteNote(this.props.id))
        }

        let NewTagInText = event => {
            if(event.target !== inputText.current) {
                this.props.dispatch(UpdateFindTagInText(this.props.id))
            }
        }

        let inputName = React.createRef();
        let inputTag = React.createRef();
        let inputText = React.createRef();

        return(
            <div className={style.noteBox} onClick={NewTagInText}>
                <div className={style.noteName}>
                    <input className={style.input} value={this.props.name} ref={inputName} onChange={NewName}/>
                    <div className={style.buttonBox}>
                        <button className={style.button} onClick={DeleteNote}>X</button>
                        <button className={style.button} onClick={this.open}>{this.state.open ? "<" : ">"}</button>
                    </div>
                </div>
                <textarea className={style.noteText} ref={inputText} style={this.state.open ? {display: 'flex'} : {display: 'none'}} value={this.props.text} onChange={NewText}/>
                <input className={style.noteTag} value={this.props.tag} ref={inputTag} onChange={NewTag}/>
            </div>
        )
    }
}

export default Note