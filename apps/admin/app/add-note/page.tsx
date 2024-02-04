import { AddNoteContainer } from '../../features';

const AddNote = (props: any) => {
  return <AddNoteContainer edit={props.searchParams.id ? true : false} />;
};
export default AddNote;
