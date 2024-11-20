export default function TransDropdown () {
    
    function populateDate() {
        let dateOptions = ["Today","Weekly","Monthly","Annually"]
        return (
            dateOptions.map((str)=>{ 
                return<option>{str}</option>
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