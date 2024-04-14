import { PiFolder, PiFolderNotchOpen, PiFolderSimpleFill } from 'react-icons/pi';
import styled from 'styled-components';

interface FolderProps {
  type: 'open' | 'default';
  name: string;
}

const Folder = ({ type, name }: FolderProps) => {
  return (
    <FolderStyle>
      <span>{type === 'default' ? <PiFolder /> : <PiFolderNotchOpen />}</span>
      {name}
    </FolderStyle>
  );
};
const FolderStyle = styled.div``;

export default Folder;
