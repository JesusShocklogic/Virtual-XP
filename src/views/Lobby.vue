<template>
  <div class="lobby p-2 h-full">
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

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Module from "@/components/Module.vue";
import Card from "@/components/Card.vue";

@Options({
  components: {
    Module,
    Card,
  },
})
export default class Lobby extends Vue {}
</script>
