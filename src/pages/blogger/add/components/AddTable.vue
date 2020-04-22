<template>
    <div>
        <div class="table">
            <div v-if='submmited'>
                <h3 class="over-blog">您的博客发布成功！</h3>
            </div>
            <form class="tableForm">
                <div>
                    <h1 class="h1">添加博客</h1>
                    <div class="blog-table">
                        <input type="text" placeholder="博客标题" v-model="blog.title" required/>
                    </div>
                    <div class="blog-content">
                        <textarea placeholder="博客内容" v-model="blog.content"></textarea>
                    </div>
                </div>
                <div class="blog-type">
                    <div class="checkbox">
                        <div class="checkbox-type">类型</div>
                        <hr>
                        <label>Vue.js</label>
                        <input type="checkbox" value="Vue.js" v-model="blog.categories"/>
                        <label>Node.js</label>
                        <input type="checkbox" value="Node.js" v-model="blog.categories"/>
                        <label>JavaScript</label>
                        <input type="checkbox" value="JavaScript" v-model="blog.categories"/>
                        <label>React.js</label>
                        <input type="checkbox" value="React.js" v-model="blog.categories"/>
                    </div>
                    <hr>
                    <div class="blog-author">
                        <label>作者:</label>
                        <input v-model="blog.author" />
                    </div>
                </div>
                <hr>
                    <div class="button">
                        <button class="button-button" @click.prevent="postClick">添加博客</button>
                    </div>
            </form>
            <div>
                <div class="preview">
                    <div class="preview-overview">
                        <h1>博客预览</h1>
                    </div>
                    <div class="conten">
                        <div class="preview-title">
                            <h2>博客标题</h2>
                            {{blog.title}}
                        </div>
                        <div class="preview-conten">
                            <h3>
                              博客内容:
                              <div class="preview-text">{{blog.content}}</div>
                            </h3>
                        </div>
                        <div class="preview-classification">
                            <h4>
                                博客分类:
                                <ul>
                                    <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
                                </ul>
                            </h4>
                        </div>
                        <div class="preview-author">
                            <h4>作者：{{blog.author}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
/*
    https://jsonplaceholder.typicode.com/posts
*/
export default {
  name: 'AddTable',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      submmited: false
    }
  },
  methods: {
    postClick () {
      axios.post('https://blog-4399.firebaseio.com/post.json', this.blog)
      this.submmited = true
    }
  }
}
</script>

<style lang='stylus' scoped>
.over-blog
  color : #fff
  font-size : 2rem
.table
  width : 60rem
  height : 40rem
  position : absolute
  top : 10%
  left : 20%
.h1
  padding-left : 24rem
  font-size : 3rem
.blog-table
  font-size : 1.5rem
  line-height : 3rem
  width : 100%
  height : 3rem
  margin-bottom : 1rem
  input
   outline: none
   filter:Alpha(opacity=70); opacity: .5
   height : 3rem
   width : 100%
   border-radius : 5rem
   font-size : 1.2rem
   text-align : center
   box-sizing border-box
   color : #000
.blog-content
  border-radius : 1rem
  width : 100%
  height : 15rem
  textarea
   filter:Alpha(opacity=70); opacity: .5
   outline: none
   box-sizing border-box
   text-indent: 1rem
   background : #eee
   height : 100%
   width : 100%
   border-radius : 1rem
   font-size : 1.5rem
.blog-type
  margin-top : 1rem
  margin-left : 1rem
.checkbox-type
  font-size : 1.5rem
.blog-author
  margin-top : 1.4rem
  input
   outline: none
   text-indent: .3rem
   filter:Alpha(opacity=70); opacity: .5
   border-radius : .3rem
.button-button
  width : 100%
  height : 2rem
  margin-bottom : .5rem
  background: #ccc
  border-radius : 1rem
  color : #000
  letter-spacing : 2.5rem
  transition : all 0.5s linear
  background-position : 0%
  &:hover
   z-index: -1
   background: linear-gradient(60deg,yellow, #f441a5, #ffeb3b, #03a9f4, #f441a5, #ffeb3b, #eee);
   border-radius: 40px;
   background-size: 400%;
   filter: blur(.01rem); /*过渡：模糊*/
   background-position : 100%
  &:leave
   background-position : 0%
.preview
  margin-bottom : 1rem
  height : 29.5rem
.preview-overview
  letter-spacing : 5rem
  color : #9999ff
  font-size : 1rem
  text-align : center
  padding-left : 5rem
  font-size : 1.5rem
.conten
  border : .5rem solid #eee
  border-radius : 1rem
  .preview-title
   letter-spacing : 1rem
   color : #99ffff
   font-size : 1rem
   border-bottom : .3rem solid #ccc
   text-align : center
  .preview-conten
   border-bottom : .3rem solid #ccc
   .preview-text
    font-size : 1rem
    text-indent : 2rem
  .preview-classification
   border-bottom : .3rem solid #ccc
</style>
