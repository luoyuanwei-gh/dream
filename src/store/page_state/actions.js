export const setBreadcrumb = ({ commit }, value) => {
  commit('setBreadcrumb', value)
}

export const addContentTabs = ({ commit, state }, value) => {
  const contentTabs = state.pageState.contentTabs
  let tabIndex = -1
  contentTabs.some((item, index) => {
    if (item.code === value.code) {
      tabIndex = index
    }
    return item.code === value.code
  })
  if (tabIndex > -1) {
    contentTabs.splice(tabIndex, 1)
  }
  contentTabs.push(value)
  commit('setContentTabs', contentTabs)
}

export const removeContentTabs = ({ commit, state }, index) => {
  const contentTabs = state.pageState.contentTabs
  if (index <= contentTabs.length) {
    contentTabs.splice(index, 1)
    commit('setContentTabs', contentTabs)
  }
}

export const setCurrentPage = ({ commit, state }, value) => {
  commit('setCurrentPage', value)
}
