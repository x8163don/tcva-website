<template>
  <ActivityList :activities="activities"></ActivityList>
</template>

<script>
import ActivityList from "../components/ActivityList";
import { getPosts } from "../../api";
import moment from "moment";

const THREE_MONTH_AGO = moment().add("d", -90);

export default {
  components: { ActivityList },
  async mounted() {
    await getPosts({
      number: 10,
      category: "活動報報",
      after: THREE_MONTH_AGO.toISOString()
    }).then(response => {
      this.activities = response.data.posts;
    });
  },
  data() {
    return {
      activities: []
    };
  }
};
</script>
