import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

const NotesCard = ({id, title, text}) => {
  return (
    <div    className="flex flex-col border-t-5 w-[16vw] min-h-45 rounded-lg bg-white border border-slate-200 p-3 relative drop-shadow-xl">
        <div    className="mt-1 flex flex-wrap justify-between">
            <b>{title}</b>
            <MoreVertOutlinedIcon />

        </div>
        <div    className="mt-1.5 text-gray-600 text-[14px] mb-7">
            <p>{text}</p>
        </div>
        <div    className='flex flex-wrap absolute bottom-2 right-2 gap-3'>
            <ArchiveOutlinedIcon />
            <DeleteOutlinedIcon />
            <PushPinOutlinedIcon />
        </div>
    </div>

  )
}

export default NotesCard