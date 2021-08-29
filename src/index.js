import { isRef, onUnmounted } from '@vue/composition-api'

const defaultOption = {
  init: false,
}

export const useHistoryStateCache = (refs, option = {}) => {
  const opt = { ...defaultOption, ...option }

  const pickHistoryStateCache = () => {
    if (!history) return
    if (!history.state || typeof history.state !== 'object') return

    Object.entries(history.state).forEach(([refName, cachedRef]) => {
      const currentRef = refs[refName]
      if (!currentRef) return

      Object.entries(cachedRef).forEach(([key, value]) => {
        if (currentRef[key] === undefined) return
        currentRef[key] = value
      })
    })
  }

  const cacheRefsToHistoryState = () => {
    const cachedRefs = { ...history.state };
    Object.entries(refs).forEach(([refName, ref]) => {
      if (isRef(ref)) {
        cachedRefs[refName] = { value: ref.value }
      } else {
        cachedRefs[refName] = ref
      }
    })
    history.replaceState(cachedRefs, '', '')
  }

  if (opt.init) {
    pickHistoryStateCache()

    window.addEventListener('unload', cacheRefsToHistoryState)
    onUnmounted(() => {
      window.removeEventListener('unload', cacheRefsToHistoryState)
    })
  }

  return {
    pickHistoryStateCache,
    cacheRefsToHistoryState
  }
}
