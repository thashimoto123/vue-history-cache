declare interface Option {
  init?: boolean;
}

export declare const useHistoryStateCache: (refs: { [key:string]: any }, option?: Option) => {
  pickHistoryStateCache: () => void;
  cacheRefsToHistoryState: () => void;
}
