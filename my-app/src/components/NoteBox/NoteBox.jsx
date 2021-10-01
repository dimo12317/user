import Note from './Note/Note'
import style from './NoteBox.module.css'
import {UpdateNewNote, UpdateFindInput} from './../../store/dispatch/dispatch'
import React from 'react'

class NoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {openInput: false}
    }

    render () {
    
        let AddNote = () => {
            this.props.dispatch(UpdateNewNote())
        }

        let CloseFind = event => {
            if(this.state.openInput && event.target !== FindInput.current && this.props.store.search === '') {
                this.setState(state => ({
                    openInput: !state.openInput
                }));
            }
        }

        let ChangeInput = () => {
            this.setState(state => ({
                openInput: !state.openInput
            }));
        }

        let ChangeFindInput = () => {
            this.props.dispatch(UpdateFindInput(FindInput.current.value))
        }

        let FindInput = React.createRef();

        return (
            <div className={style.NoteBox} onClick={CloseFind}>
                <div className={style.button}>
                    <button className={style.add} onClick={AddNote}>+</button>
                    <button className={style.find} style={this.state.openInput ? {display: 'none'} :{display: 'flex'}} onClick={ChangeInput}></button>
                    <input className={style.input} style={this.state.openInput ? {display: 'flex'} :{display: 'none'}} value={this.props.store.search} ref={FindInput} onChange={ChangeFindInput}/>
                </div>
                <div>
                {
                    this.props.store.note.map((obg) => {
                        if(!this.props.store.search) {
                            return <Note id={obg.id} text={obg.text} tag={obg.tag} name={obg.name} open={obg.open} dispatch={this.props.dispatch}/>
                        }
                        else{
                            if(obg.tag.slice(0,this.props.store.search.length).toLowerCase() === this.props.store.search.toLowerCase() && this.props.store.search !== '')
                            return <Note id={obg.id} text={obg.text} tag={obg.tag} name={obg.name} open={obg.open} dispatch={this.props.dispatch}/>
                        }
                    })
                }
                </div>
            </div>
        )
    }
}

export default NoteBox