import { atom } from 'recoil';

type State = {
  nodes: LP.Node[];
  visualizedfileUrl: string | File;
  currentPath: string;
  currentPathId: string;
  clipboard: LP.Node[];
  selectedId: string | null;
  selectedAssetId: string | null;
  draggedNode: LP.Node | null;
  editingNodeId: null | string;
};

export const lpNodeState = atom<State>({
  key: 'lpNodeState',
  default: {
    nodes: [],
    visualizedfileUrl: '',
    currentPath: '\\root',
    currentPathId: '\\root',
    clipboard: [],
    selectedId: null,
    selectedAssetId: null,
    draggedNode: null,
    editingNodeId: null,
  },
});
