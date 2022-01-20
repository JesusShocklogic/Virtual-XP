<template>
  <div class="lobby p-2 h-full">
    <Sidebar :toggled="hamburgerToggled" @hide="$emit('update:hamburgerToggled', false)">
      Hello World
    </Sidebar>
    <Card>
      <div class="grid grid-cols-2 gap-4">
        <Module text="Live Now" class="col-span-2">
          <img src="../assets/examples/antenna.svg" />
        </Module>
        <Module text="Programme">
          <img src="../assets/examples/antenna.svg" />
        </Module>
        <Module text="Speakers">
          <img src="../assets/examples/antenna.svg" />
        </Module>
        <Module text="Exhibition">
          <img src="../assets/examples/antenna.svg" />
        </Module>
        <Module text="Networking">
          <img src="../assets/examples/antenna.svg" />
        </Module>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue, WithDefault } from "vue-class-component";
import Module from "@/components/Module.vue";
import Card from "@/components/Card.vue";
import Sidebar from "@/components/Sidebar.vue";

class NavbarProps {
    hamburgerToggled: boolean = prop({ required: true })
}

@Options({
  components: {
    Module,
    Card,
    Sidebar
  },
  emits: [
    'update:hamburgerToggled'
  ]
})
export default class Lobby extends Vue.with(NavbarProps) {
}
</script>
