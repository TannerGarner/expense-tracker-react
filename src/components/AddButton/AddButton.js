import AddIcon from '@mui/icons-material/Add';

export default function AddButton () {

    function toggleAddModal() {
        
    }

    return (
        <div className='addButton' onClick={toggleAddModal()}>
            <AddIcon className='addImage'></AddIcon>
        </div>
    )
}