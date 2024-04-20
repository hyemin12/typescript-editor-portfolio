import styled from 'styled-components';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <SidebarStyle>
      <SectionTitle>file explorer</SectionTitle>
      <Menu type="folder" name="닫힌 폴더" />
      <Menu type="folder" name="열린 폴더" subFiles={['파일1', '파일2', '파일3']} />
      <Menu type="file" name="파일" />
      {}
    </SidebarStyle>
  );
};
const SidebarStyle = styled.div`
  flex-shrink: 0;
  min-width: 14vw;
  background-color: ${({ theme }) => theme.systemColor.sidebar};
`;
const SectionTitle = styled.p`
  margin-bottom: 1em;
  padding: 1em;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
  opacity: 0.6;
`;

export default Sidebar;
