<script setup lang="ts">
import Module from "../components/Module.vue";
import Card from "../components/Card.vue";
import Sidebar from "../components/Sidebar.vue";
import { toRefs } from "vue";

type Props = {
  hamburgerToggled: boolean
}

const props = defineProps<Props>(),
      { hamburgerToggled } = toRefs(props),
      emit = defineEmits<{ (e: 'update:hamburgerToggled', val: boolean): void }>(),
      hide = () => emit('update:hamburgerToggled', false)
</script>

<template>
  <div class="lobby p-2 h-full">
    <Sidebar :toggled="hamburgerToggled" @hide="hide">
      Hello World
    </Sidebar>
    <Card>
      <div class="grid grid-cols-2 gap-4">
        <Module text="Live Now" class="col-span-2">
          <img src="../assets/main-stage.svg" />
        </Module>
        <Module text="Programme">
          <img src="../assets/programme.svg" />
        </Module>
        <Module text="Speakers">
          <img src="../assets/speaker.svg" />
        </Module>
        <Module text="Exhibition">
          <img src="../assets/exhibition.svg" />
        </Module>
        <Module text="Networking">
          <img src="../assets/networking.svg" />
        </Module>
      </div>
    </Card>
  </div>
</template>