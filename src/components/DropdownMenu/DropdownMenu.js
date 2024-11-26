export default function DropdownMenu () {
    
    function populateDate() {
        let dateOptions = ["Today","Weekly","Monthly","Annually"]
        return (
            dateOptions.map((str , index)=>{ 
                return<option key={index}>{str}</option>
            })
        )
    }

    function populateType(){
        let totalTypes;

    }

    function populateTags(){
        let totalTags;

    }
    
    return (
        <select>
            {populateDate()}
        </select>
    )
}