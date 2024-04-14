import React from 'react';
import styled from 'styled-components';
import Folder from './Folder';
import File from './File';

const Sidebar = () => {
  return (
    <SidebarStyle>
      <Folder type="default" name="folder example" />
      <Folder type="open" name="open folder example" />
      <File name="file example" />
    </SidebarStyle>
  );
};
const SidebarStyle = styled.div``;

export default Sidebar;
