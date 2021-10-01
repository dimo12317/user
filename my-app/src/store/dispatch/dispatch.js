


let dispatch = {
    info: "allInfo",
    subscribe(store){
        this.info = store
    },
    render(){
        return 0;
    },
    options(action){
        if(action.type === "updateName") {
            this.info.note.map((obg) => {
                if(obg.id === action.id) {
                    if(action.value === '') {
                        obg.name = '-name';  
                    } else if(obg.name === '-name') {
                        obg.name = action.value.slice(5,6)
                    } else {
                        obg.name = action.value
                    }
                }
            })
        } else if(action.type === "updateTag") {
            this.info.note.map((obg) => {
                if(obg.id === action.id) {
                    if(action.value === '') {
                        obg.tag = '-tag';  
                    } else if(obg.tag === '-tag') {
                        obg.tag = action.value.slice(4,5)
                    } else {
                        obg.tag = action.value
                    }
                }
            })
        } else if(action.type === "updateText") {
            this.info.note.map((obg) => {
                if(obg.id === action.id) {
                    obg.text = action.value
                }
            })
        } else if(action.type === "updateNewNote") {
            this.info.note.unshift(
                {
                    "name" : "-name",
                    "text" : "",
                    "tag": "-tag",
                    "id" : Math.random()
                }
            )
        } else if(action.type === "updateDeleteNote") {
            let number = 0;
            this.info.note.map((obg) => {
                if(obg.id === action.id) {
                    this.info.note.splice(number, 1)
                }
                ++number;
            })
        } else if(action.type === "updateFindInput") {
            this.info.search = action.value
        } else if(action.type === "updateFindTagInText") {
            this.info.note.map((obg) => {
                if(obg.id === action.id) {
                    let number = 0;
                    for(let i = 0; i < obg.text.length; i++) {
                        if(obg.text[i] === '#') {
                            let newTag = obg.text.slice(number+1, obg.text.length)
                            if (obg.tag === "-" || obg.tag === "") {
                                obg.tag = newTag;  
                                obg.text = obg.text.slice(0, number)
                            } else {
                                obg.tag += `, ${newTag}`;
                                obg.text = obg.text.slice(0, number)
                            }
                        }
                        ++number;
                    }
                }
            })
        }

        this.render()
    }
}

export function UpdateName(text, id){
    return {
        type: "updateName", value: text, id: id
    }
}

export function UpdateTag(text, id){
    return {
        type: "updateTag", value: text, id: id
    }
}

export function UpdateText(text, id){
    return {
        type: "updateText", value: text, id: id
    }
}

export function UpdateNewNote(){
    return {
        type: "updateNewNote"
    }
}

export function UpdateDeleteNote(id){
    return {
        type: "updateDeleteNote", id: id
    }
}

export function UpdateFindInput(text){
    return {
        type: "updateFindInput", value: text
    }
}

export function UpdateFindTagInText(id){
    return {
        type: "updateFindTagInText", id: id
    }
}

export default dispatch
