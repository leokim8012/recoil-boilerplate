import { atom } from 'recoil';

export type State = {
  id: string;
  name: string;
  screenList: string[];
  assetList: string[];
  visualizedAssetIds: string[];
  fps: number;
};

export const plaskProjectState = atom<State>({
  key: 'plaskProject',
  default: {
    id: '',
    name: '',
    screenList: [],
    assetList: [],
    visualizedAssetIds: [],
    fps: 0,
  },
});
