export interface GameParams {
  id: string
  title: string
  bannerUrl: String
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList{
      home: undefined
      game: GameParams
    }
  }
}