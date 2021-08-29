<template>
  <div id="app">
    <h2>Exmaple</h2>
    <a href="./page2.html">move to other page</a>
    <p>updated at: {{ updatedAt }}</p>
    <h3>List 1</h3>
    <ul>
      <li :key="item" v-for="item in lists.list1">{{ item }}</li>
    </ul>
    <button v-if="!loading.list1" @click="load('list1')">load</button>
    <p v-else>...loading</p>

    <h3>List 2</h3>
    <ul>
      <li :key="item" v-for="item in lists.list2">{{ item }}</li>
    </ul>
    <button v-if="!loading.list2" @click="load('list2')">load</button>
    <p v-else>...loading</p>

  </div>
</template>

<script>
import { defineComponent, ref, reactive } from '@vue/composition-api'
import { useHistoryStateCache } from '../../dist/'

const getList = async (type, page) => {
  const list = [`${type} item${page * 3}`,`${type} item${page * 3 + 1}`,`${type} item${page * 3 + 2}`]
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ updatedAt: new Date().toDateString(), list })
    }, 1000)
  })
}

export default defineComponent({
  setup() {
    const updatedAt = ref('')
    const pageCounts = reactive({ list1: 0, list2: 0 })
    const lists = reactive({ list1: [], list2: [] })
    const loading = reactive({ list1: false, list2: false })

    useHistoryStateCache({
      updatedAt,
      pageCounts,
      lists,
    }, {
      init: true
    })

    const load = async (type) => {
      loading[type] = true

      const data = await getList(type, pageCounts[type])
      updatedAt.value = data.updatedAt
      lists[type] = lists[type].concat(data.list)
      loading[type] = false
      pageCounts[type]++
    }

    if (pageCounts.list1 === 0) load('list1')
    if (pageCounts.list2 === 0) load('list2')

    return {
      updatedAt,
      loading,
      lists,
      load,
    }
  },
})
</script>
