<template>
  <a-timeline class="grid justify-center mt-20" mode="right">
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><i class="fas fa-circle" style="font-size: 16px" >
      
      </i>
      </template>
      salam
    </a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
<div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal   width="1048px"  v-model:visible="visible" title="Basic Modal" @ok="handleOk">
    <a-tabs v-model:activeKey="activeKey" >
      <a-tab-pane key="1" tab="علی" class="text-right">پوریا</a-tab-pane>
      <a-tab-pane key="2" tab="محمد" class="text-right" force-render>محمد</a-tab-pane>
      <a-tab-pane key="3" tab="پوریا" class="text-right">مریم</a-tab-pane>
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component
          :is="DefaultTabBar"
          v-bind="props"
          class="text-right bg-white"
        />
      </template>
    </a-tabs>

    <div class="h-56">
 
     <a-timeline class="grid justify-center mt-20" mode="right">
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><i class="fas fa-circle" style="font-size: 16px" >
      
      </i>
      </template>
      salam
    </a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
    </div>
    
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'


export default defineComponent({
  name: 'App',
  components: {
  },setup() {
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
            activeKey: ref('1'),

    };
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
 
  text-align: center;
  color: #2c3e50;
 
}
</style>
