import { AddNoteContainer } from '../../features';

const AddNote = ({ ...props }: any) => {
  return <AddNoteContainer edit={props.searchParams.edit} />;
};
export default AddNote;
