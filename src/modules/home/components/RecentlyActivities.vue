<template>
  <div>
    <h1 class="activity_title">最新消息</h1>
    <div class="activity">
      <div
        class="activity_post"
        v-for="(item, idx) in recent"
        :key="item.ID"
        @click="$router.push(`/post/${item.ID}`)"
      >
        <div class="post_img">
          <a>
            <img :src="getImageByIdx(idx)" />
          </a>
        </div>
        <div class="post_container">
          <div class="post_date">{{ item.date | toDate }}</div>
          <h2 class="post_title">
            <a target="_blank">{{ item.title }}</a>
          </h2>
          <div class="post_excerpt">
            {{ item.excerpt | toRawText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPosts } from "../../api";
import moment from "moment";
import { htmlToText } from "html-to-text";

export default {
  name: "RecentlyActivities",
  filters: {
    toRawText(value) {
      return htmlToText(value) || "點我查看";
    },
    toDate(value) {
      return moment(value).format("YYYY / MM / DD");
    }
  },
  async mounted() {
    const activities = await getPosts({ category: "最新消息", number: 4 });
    this.recent = this.recent.concat(activities.data.posts);
  },
  data() {
    return {
      recent: []
    };
  },
  methods: {
    getImageByIdx(idx) {
      return require(`../../../assets/home/dot${[(idx % 4)+1]}.png`);
    }
  }
};
</script>

<style scoped>
h1 {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 24px;
}
.activity_title {
  margin-top: 60px;
  font-size: 24px;
  position: relative;
}

.activity {
  display: flex;
  justify-content: space-between;
}

.activity_title::after {
  content: "";
  width: 1200px;
  height: 2px;
  background: #a7a7a7;
  position: absolute;
  bottom: -14px;
  left: 0;
}

.activity_post {
  margin-top: 40px;
  height: 500px;
  width: 300px;
  transition: all 0.4s;
  font-size: 0;
}

.post_img {
  height: 210px;
}

.post_container {
  height: 290px;
  border: 1px solid #a7a7a7;
  border-top: transparent;
  padding: 20px;
}

.activity_post:hover {
  transform: translate(-2px, -2px);
  box-shadow: 2px 2px 5px #a7a7a7;
  cursor: pointer;
}

.post_date {
  height: 20px;
  font-size: 16px;
  color: #a7a7a7;
}

.post_title {
  height: 20px;
  font-size: 20px;
  font-weight: 400;
  margin: 12px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post_title > a {
  text-decoration: none;
  color: #2d2d2d;
}

.post_excerpt {
  height: 180px;
  display: block;
  font-size: 16px;
  overflow:hidden;
  text-overflow: ellipsis;
}
</style>
