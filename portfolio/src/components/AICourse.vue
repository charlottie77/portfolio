<template>
    <div id="case-1">
        <div class="back-btn" @click="goToMain()">
            <button></button>
        </div>
        <div class="anchor-index">
           <div class="anch-item" v-for="(item, index) in cate" @mouseover='showAnchor(index)' @mouseleave='hideAnchor(index)' @click="goAnchor('#cc-'+ item.anchor)">
               <span></span>
               <label v-show="show_anchor[index]">{{item.title}}</label>
           </div>
        </div>
        <div class="c1-banner">
        </div>
        <div class="c1-content-div">
            <div class="c1-content">
                <div class="c-title c-slim-58">
                    <h1>AI Course Platform</h1>
                    <h2>We create an all-in-one platform for K-12 AI education.</h2>
                </div>
                <div class="c-overview c-slim-58  title-70" id="cc-overview">
                    <h3>Overview</h3>
                    <div class="c-info"> 
                        <div class="ci-1">
                            <div class="ci-1-l">
                                <label class="il-title">Team</label>
                                <div class="ci1l-1">
                                    <label>Xiaohua Sun</label>
                                    <label>Linas Zhang</label>
                                    <label>Me</label>
                                    <label>Jay Zhu</label>
                                    <label>Jan Doring</label>
                                    <label>Dachang Liu</label>
                                </div>
                            </div>
                            <div class="ci-1-r">
                                <label class="il-title">Tool &amp; Tech</label>
                                <div class="ci1r-1">
                                    <label>Sketch</label>
                                    <label>illustrator</label>
                                    <label>After Effect</label>
                                    <label>Unity 3D</label>
                                    <label>TensorFlow</label>
                                    <label>OpenCV</label>
                                </div>
                            </div>
                        </div>
                        <div class="ci-2">
                            <div class="ci-2-l">
                                <label class="il-title">My Role</label>
                                <div class="ci2l-1">
                                    <label>Researcher</label>
                                    <label>Concept Design</label>
                                    <label>UX Design</label>
                                    <label>Programmer</label>
                                </div>
                            </div>
                            <div class="ci-2-m">
                                <label></label>
                            </div>
                            <div class="ci-2-r">
                                <div class="ci2r-1">
                                    <p>Due to my CS background and deep participation of design, I collaborated on, </p>
                                    <p class="p-bold">· Technology selection</p>
                                    <p class="p-bold">· Requirement modeling</p>
                                    <p class="p-bold">· Architecture design</p>
                                </div>
                                <div class="ci2r-2">
                                    <p>I also lead, </p>
                                    <p><span class="p-bold">· Algorithm design</span> (relating to machine learning and computer vision.)</p>
                                    <p><span class="p-bold">· Unity development team </span>(using agile software development methods.)</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="c-secret c-slim-58">
                    <p class="cs-p">To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of others.</p>
                </div>
                <div class="c-firstq c-slim-58 title-170">
                    <div class="c-quote">
                        <p class="cq-content">“It’s important that our children be given accurate information about Al so they can understand this technology that is reshaping our lives.”</p>
                        <p class="cq-by">By Prof. David Touretzky, an AI researcher at CMU</p>
                    </div>
                </div>
                <div class="c-overview title-150 c-slim-58" id="cc-background">
                    <div class="co-t-1">
                        <h4>Background</h4>
                        <div class="co-1 title-70">
                            <div class="co-1-1">
                                <label class="co11-img"></label>
                            </div>
                            <p class="co-1-2 p-text">There is huge public interest in AI nowadays. For children, their parents want them to study this cutting-edge knowledge earlier for many reasons. Nevertheless, in China, most of AI education is still in a primary stage. </p>
                        </div>
                        <div class="co-2 title-50 ">
                            <div class="co-2-1">
                                <label class="co21-img"></label>
                            </div>
                            <div class="co-2-2">
                                <p class="cs-p">The weakness of current AI K-12 education in China. </p>
                            </div>
                        </div>
                    </div>
                    <div class="co-t-2 title-150" id="cc-the-mission">
                        <h4>The Mission</h4>
                        <div class="cot-2-1 title-90">
                            <label class="label-goal">Explore a better solution for AI K-12 Education.</label>
                        </div>
                        <p class="p-text title-50">In this way, we design an all-in-one AI study platform for a series of AI courses conducted by CDI (Center for Digital Innovation), Tongji University.  </p>
                    </div>
                </div>
                <label class="co3-img title-50"></label>
                <div class="c-overview title-110 c-slim-58" id="cc-design-process">
                    <div class="co-t-3">
                        <h4>Design Process</h4>
                    </div>
                </div>
                <label class="cot3-img title-30"></label>
                <div class="c-overview c-slim-58 title-30">
                    <p class="p-text"> We have <span>iterations between stage 3 to stage 8</span>, where we used agile development methods. </p>
                </div>
                <div class="c-kick-outter title-170">
                    <div class="c-kick c-slim-58">
                        <h4>Kick-off</h4>
                        <div class="ck-1">
                            <p class="p-text">Before we find our specific challenges, we take a step back and think about the challenges in the field of AI education.</p>
                            <p class="p-text">We conducted market research, literature research. Also, we conducted user interviews in many programming, creator, and AI extra-curricular classes around Shanghai and some non-first-tier cities, like Suzhou, and Urumqi. </p>
                            <div class="ck-1-1 title-90">
                                <label class="ck1-img"></label>
                            </div> 
                            <div class="ck-1-2">
                                <p class="cs-p">Three categories of first insights we got.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div class="c-deep c-slim-58 title-170" id="cc-deeper-research">
                    <h3>Deeper Research</h3>
                    <p class="p-text">Due to the plan of lab, we first narrow to kids aged 6-12, 
                        who are in primary school. we found that schools tend to set AI course 
                        only <span>for 11 to 12 years old kids</span>, since they are relatively matured and 
                        get a better logical savvy. Based on our research insights, I proposed 
                        several questions firstly.</p>
                    <div class="cd-1">
                        <div class="title-70">
                            <h4>The User</h4>
                        </div>
                        <div class="cd-1-1">
                             <label class="cd1-img"></label>
                        </div>
                        <div class="cd-1-2">
                             <label class="cd2-img"></label>
                             <p class="cs-p">The three question I proposed for our deeper research.</p>
                        </div>
                    </div>
                    <div class="cd-2">
                        <div class="cd2-t-1 title-150">
                            <label>1</label>
                            <h5>The Content Users Want To Learn</h5>
                        </div>
                        <div class="c-quote title-30">
                            <p class="cq-content">“In fact, sending him to study, I do hope that he will become more persevering.”</p>
                            <p class="cq-by">By Jennifer Lee, a participant of our user interview.</p>
                        </div>
                        <div class="cd2-2 title-30">
                            <div class="cd2-2-1">
                                <p class="p-text">To solve the first question — “When we talked about AI education, what do we want to learn?”, we conduct <span>user interview.</span> </p>
                                <div class="title-50" style="padding-right: 32px;">
                                     <p class="p-text">In the interview, we prepared <span>card-sorting exercise</span>, allowing users to arrange some cards with the elements 
                                    they can learn in AI education. We sorted out the results to know what they want to learn.</p>
                                </div>
                                <div class="cd221-1 title-70"  style="padding-right: 62px;">
                                    <label class="cd3-img"></label>
                                    <p class="cs-p">User Interview</p>
                                </div>
                            </div>
                            <div class="cd2-2-2">
                                <label class="cd4-img"></label>
                                <p class="cs-p">The result of the card-sorting exercise</p>
                            </div>
                        </div>
                    </div>
                    <div class="cd-3">
                         <div class="cd3-t-1 title-150">
                            <label>2</label>
                            <h5>The Way Users Are Learning</h5>
                        </div>
                        <div class="cd-3-1">
                            <div class="cd31-l">
                                <label class="cd5-img"></label>
                                <p class="cs-p">Photo by Xiaoteng Ge</p>
                            </div>
                            <div class="cd31-r">
                                <p class="p-text">In order to understand the current study situation, we <span>interviewed 5 group of parents</span>. At the same time, we conducted <span>observations</span>, both in the programming classes and in the experimental AI course which our lab are teaching (without using our product platform)</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="over-center oc1 title-90">
                     <label class="cd6-img"></label>
                </div>
                <div class="c-deep c-slim-58">
                    <div class="cd-3-2 title-70">
                        <p class="cs-p">The discoveries we found.</p>
                    </div>
                    <div class="c-quote title-150">
                            <p class="cq-content">“Education, therefore, is a process of living and not a preparation for future living.”</p>
                            <p class="cq-by">By John Dewey in My Pedagogical Creed</p>
                    </div>
                    <div class="cd-4">
                        <div class="cd4-t-1 title-150">
                            <label>3</label>
                            <h5>The Model Users Learng</h5>
                        </div>
                        <div class="cd-4-1">
                            <p class="p-text">We also discussed model of children's learning with Jerry Dong, a children's learning expert.</p>
                            <p class="p-text">We focused on John Dewey’s theory of schooling, which is called <span>progressivism</span>, emphasizes children and their interests rather than subject matter. </p>
                        </div>
                        <div class="cd-4-2 title-70">
                            <label class="cd7-img"></label>
                            <p class="cs-p">The insights we got from Jerry Dong </p>
                        </div>
                        
                    </div>
                </div>
                <div class="c-dechall c-slim-58 title-170" id="cc-design-challenges">
                    <h3>Design Challenges</h3>
                    <div class="cdec-1">
                        <p class="p-text">We summarize the insights obtained in the above deeper research, and we deducted our design goals, and our design challenges emerged.</p>
                        <label class="cde1-img"></label>
                    </div>
                    
                </div>
                <div class="c-deev-outter title-170" id="cc-design-evaluation">
                     <div class="c-deev c-slim-58 ">
                        <h3>Design &amp; Evaluation</h3>
                        <div class="deev-1">
                            <div class="title-70">
                                <h4>The Framework</h4>
                            </div>
                            <p class="p-text">Then, we start to explore our information architecture. We conducted <span>affinity diagramming exercise</span> to organize our ideas. 
                                And we <span> brainstormed </span> elements that can stimulate and cultivate children’s interests. </p>
                            <div class="deev-1-1 title-70">
                                <!-- <div class="deev11-1">
                                    <label class="deev1-img"></label>
                                </div> -->
                                <div class="deev11-2">
                                    <label class="deev2-img"></label>
                                    <p class="cs-p">A basic classification of these elements</p>
                                </div>
                            </div>
                            <div class="title-70">
                                <p class="p-text">Thus, we proposed several ideas, after repeated trials and combinations, we roughly determined <span> a rough solution — 
                                earning, exercise, and practice. </span> </p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="c-deev c-slim-58">
                    <div class="deev-2">
                        <div class="title-110">
                            <h4>Test and Iteration</h4>
                        </div>
                        <p class="p-text">Then we quickly came up with a rough lecture of “Chapter 3. Learning”. Jan and I made a little game on the paper 
                            about teaching a robot to take care about himself. We <span>tested</span> it on a child(9 years old boy) and several laymen(who without CS 
                            background). </p>
                        <div class="deev-2-1">
                            <div class="deev21-l">
                                <label class="deev3-img"></label>
                                <div class="deev21l-1">
                                    <p class="cs-p" style="display: inline">Our paper prototype</p>
                                    <label class="deev4-img"></label>
                                </div>
                            </div>
                            <div class="deev21-r">
                                <label class="deev5-img"></label>
                            </div>
                        </div>
                        <p class="p-text">We found that, for children with insufficient concentration (which is very common), to learn content directly is very boring and they would easily lose interests. After the several rounds of tests and modification, I proposed three features:</p>
                        <div class="title-70">
                            <label class="deev6-img"></label>
                        </div>
                        <p class="p-text title-70">To complete —eliminate the technical barriers, we believe that all stages of learning should be integrated into one platform, 
                            and be compatible with mainstream learning tools, such as PC and iPad. Thus, we just refine <span>our solution and flow.</span></p>
                        <div class="deev21-1 title-70">
                            <label class="deev7-img"></label>
                            <p class="cs-p">Our final architecture of AI Course Platform</p>
                        </div>
                    </div>
                </div>
                <div class="deev-3-outter title-110" id="cc-information-architecture">
                    <div class="deev-3 c-slim-58">
                        <div>
                            <h4>Information Architecture</h4>
                            <div class="deev3-1">
                                <p class="p-text">During the iteration, while paying attention to interest, we find that the knowledge delivery part is weak. In order 
                                    to highlight the interactive content, we create another module to strengthen knowledge learning.</p>
                                <label class="deev8-img"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-deev c-slim-58" id="cc-flow-wireframe">
                    <div class="deev-4 title-110">
                        <h4>Flow Refinement</h4> 
                    </div>
                </div>
                <div class="deev4-1">
                    <p class="p-text">We have several rounds of wireframe design. At the same time, we also start to design every single 
                        exercise and off-line experiment. You could see more detail about game-like exercise project here.</p>
                    <label class="deev9-img"></label>
                </div>
                <div class="c-deev c-slim-58 title-70">
                    <h4>Wireframe</h4> 
                </div>
                <div class="deev4-2">
                    <label class="deev10-img"></label>
                </div>
                <div class="c-deev c-slim-58 title-70">
                    <h4>Visual Design</h4>
                    <p class="p-text">We created Robi, a little robot, to lead our storyline.</p>
                </div>
                <div class="deev4-3">
                    <label class="deev11-img"></label>
                </div>
                <div class="c-deev c-slim-58 title-30">
                    <p class="p-text">Bright colors with highly customized illustrations are the keys of visual design.</p>
                </div>
                <div class="c-result c-slim-58 title-170" id="cc-our-result">
                    <h3>Our Result</h3>
                    <div class="cr-1">
                        <h4>Interactive Text Content</h4>
                    </div>
                </div>
                <div class="cr1-1">
                    <label class="cr1-img"></label>
                </div>
                <div class="c-grey-bg title-90">
                    <div class="c-result c-slim-58 ">
                        <h4>Game-like Exercises</h4>
                        <p class="p-text">In every lesson, the students will play a game-like exercise to study, presenting them various scenarios of how to work with AI and what can be accomplished.</p>
                    </div>
                    <div class="cr1-2 title-50">
                        <label class="cr2-img"></label>
                        <label class="cr3-img"></label>
                        <p class="p-text">Like you could train a little robot to take care about himself. You could see more detail about this project here.</p>
                    </div>
                </div>
                <div class="c-result c-slim-58 title-90">
                    <h4>Linked Glossary of AI</h4>
                </div>
                <div class="cr1-3">
                    <label class="cr4-img"></label>
                    <p class="p-text">We link a glossary of AI in the platform containing a fund of materials, which students could view it anytime, to help them get a deeper understanding.</p>
                </div>
                <div class="c-grey-bg title-90">
                    <div class="c-result c-slim-58 ">
                        <h4>All-in-one Platform</h4>
                        <p class="p-text">We put all features above into one platform to eliminate the technical barrier of users. It allows students to attain new knowledge, get hands-on experience and practice in one step, anywhere and anytime. </p>
                    </div>
                    <div class="cr1-4 title-30">
                        <label class="cr5-img"></label>
                    </div>
                </div>
                
                <div class="c-launch c-slim-58 title-170" id="cc-launch">
                    <h3>Launch</h3>
                    <p class="p-text">In May 2018, we finally released a beta version of the AI Course Platform.</p>
                    <label class="cl1-img"></label>
                    <p class="p-text">We conducted the AI K-12 learning from traditional solution to a new all-in-one platform. The new solution is dedicated to cultivating children's interests, focusing on interaction and practice, and greatly facilitating our users.</p>
                </div>
                <div class="cl-1 title-90">
                    <label class="cl2-img"></label>
                    <p class="cs-p">Our improvement</p>
                </div>
                <div class="c-launch c-slim-58 title-90">
                    <p class="p-text">June 2018, with the AI Course Platform and the corresponding courses, which are still improving, we held a lecture at the LEGO Activity Center in Pudong New Area, Shanghai, explaining the lesson “Chapter 3. Learning — Machine could learn”.</p>
                    <p class="p-text">We used the AI Course Platform to assist the teacher and complete the test successfully. We received plenty of positive feedback from the students and their parents. </p>
                    <div class="cl-2 title-50">
                        <div class="cl2-1">
                            <label class="cl3-img"></label>
                            <label class="cl4-img"></label>
                        </div>
                        <p class="cs-p">Photo by Xiaoteng Ge</p>
                    </div>
                    <div class="cl-3 title-70">
                        <label class="cl5-img"></label>
                        <p class="cs-p title-50">The data of the class</p>
                    </div>
                    <div class="title-50">
                        <p class="p-text">Seeing the encouragement from real users, I was more excited and determined to value the children’s precious interests in this field.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'AICourse',
  methods: {
    goToMain:function(){
      this.$router.push({path:'/'});
    },
    showAnchor: function(i) {
        console.log(i);
        this.$set(this.show_anchor,i,true);
        // this.show_anchor[i] = true;
        console.log(this.show_anchor);
    },
    hideAnchor: function(i) {
        this.$set(this.show_anchor,i,false);
        //this.show_anchor[i] = false;
    },
    goAnchor(selector) {
        // var anchor = this.$el.querySelector(selector);
        // document.body.scrollTop = anchor.offsetTop;
        document.querySelector(selector).scrollIntoView(true);
    }
  },
  data: function(){
    return {
      cate : [
        {title: 'Overview', anchor: 'overview'},
        {title: 'Background', anchor: 'background'},
        {title: 'The Mission', anchor: 'the-mission'},
        {title: 'Design Process', anchor: 'design-process'},
        {title: 'Deeper Research', anchor: 'deeper-research'},
        {title: 'Design Challenges', anchor: 'design-challenges'},
        {title: 'Design & Evaluation', anchor: 'design-evaluation'},
        {title: 'Information Architecture', anchor: 'information-architecture'},
        {title: 'Flow & Wireframe', anchor: 'flow-wireframe'},
        {title: 'Our Result', anchor: 'our-result'},
        {title: 'Launch', anchor: 'launch'}
      ],
      show_anchor : [
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false,
          false
      ]
    }
  },
  
}
  
</script>

<style scoped>

@import url("../css/common_style.css");
@import url("../css/ai_course.css");

</style>
