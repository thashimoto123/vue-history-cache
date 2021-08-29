declare interface Option {
  init?: boolean;
}

export declare const useHistoryStateCached: (refs: { [key:string]: any }, option?: Option) => {
  pickHistoryStateCache: () => void;
  cacheRefsToHistoryState: () => void;
}
