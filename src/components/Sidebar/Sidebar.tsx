import React from 'react';
import styled from 'styled-components';
import Folder from './Folder';
import File from './File';
import Menu from './Menu';

const mockData = {
  src: {
    components: {
      'SwitchMode.tsx': {
        type: 'file',
        name: 'SwitchMode.tsx',
      },
    },
    store: {
      'theme.store.ts': {
        type: 'file',
        name: 'theme.store.ts',
      },
    },
    style: {
      'theme.ts': {
        type: 'file',
        name: 'theme.ts',
      },
    },
    utils: {
      'index.ts': {
        type: 'file',
        name: 'index.ts',
      },
    },
    'App.tsx': {
      type: 'file',
      name: 'App.tsx',
    },
  },
};

const Sidebar = () => {
  // const renderItems = (items: Record<string, ExplorerItem>) => {
  //   return Object.entries(items).map(([key, value]) => {
  //     if (value.type === 'folder') {
  //       return (
  //         <Folder key={key} name={value.name}>
  //           {renderItems((value as FolderItem).items)}
  //         </Folder>
  //       );
  //     } else {
  //       return <File key={key} name={value.name} />;
  //     }
  //   });
  // };
  console.log(Object.entries(mockData).map(([key, value]) => console.log(key, value)));
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
