import { PiFile } from 'react-icons/pi';
import styled from 'styled-components';

interface FileProps {
  name: string;
}

const File = ({ name }: FileProps) => {
  return (
    <FileStyle>
      <span>
        <PiFile />
      </span>
      {name}
    </FileStyle>
  );
};
const FileStyle = styled.div``;

export default File;
