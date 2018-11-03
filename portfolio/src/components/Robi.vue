<template>
    <div id="case-2">
        <div class="back-btn" @click="goToMain()">
            <button></button>
        </div>
         <div class="anchor-index">
           <div class="anch-item" v-for="(item, index) in cate" @mouseover='showAnchor(index)' @mouseleave='hideAnchor(index)' @click="goAnchor('#cc-'+ item.anchor)">
               <span></span>
               <label v-show="show_anchor[index]">{{item.title}}</label>
           </div>
        </div>
        <div class="c2-banner"></div>
        <div class="c2-content-div">
            <div class="c2-content">
                <div class="c-title c-slim-68">
                    <h1>Robi's Room</h1>
                    <h2>A game-like exercise to teach the concepts of "Machine could learn".</h2>
                </div>
                <div class="c-overview c-slim-68  title-70" id="cc-overview">
                    <h3>Overview</h3>
                    <div class="c-info"> 
                        <div class="ci-1">
                            <div class="ci-1-l">
                                <label class="il-title">Team</label>
                                <div class="ci1l-1">
                                    <label>Me</label>
                                    <label>Song Pan</label>
                                    <label>Binbin Du</label>
                                    <label>Jan Doring</label>
                                </div>
                            </div>
                            <div class="ci-1-r">
                                <label class="il-title">Tool &amp; Tech</label>
                                <div class="ci1r-1">
                                    <label>Sketch</label>
                                    <label>After Effect</label>
                                    <label>illustrator</label>
                                    <label>Unity 3D</label>
                                </div>
                            </div>
                        </div>
                        <div class="ci-2">
                            <div class="ci-2-l">
                                <label class="il-title">My Role</label>
                                <div class="ci2l-1">
                                    <label>Concept Design</label>
                                    <label>UX Design</label>
                                    <label>Scrum Master</label>
                                </div>
                            </div>
                            <div class="ci-2-m">
                                <label></label>
                            </div>
                            <div class="ci-2-r">
                                <p>I led our group to complete the concept design (including game content and data) and UX design of the exercise. I also designed the core algorithm, and participated in the subsequent game development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="c-overview title-150 c-slim-68">
                    <div class="co-t-1">
                        <h4>The Mission</h4>
                        <img id="img-mission-title" src="../assets/robi_mission_title.png" alt="">
                        <div class="co-1 title-70">
                            <div class="co-1-l">
                                <img src="../assets/mission-left.png" alt="" id="mission-left">
                            </div>
                            <div class="co-1-r">
                                <p class="p-text">Our goal is to design a game-like exercise to help pupils understand the concepts of “Machine could learn.” We need a lively, attractive exercise that cultivates children's interests.</p>
                                <p class="p-text">This exercise will <span class='green-text'>be integrated into the AI Course Platform</span>, a software platform for K-12 children to study AI.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="c-research title-90" id="cc-research">
                    <div class="gray_bg">
                        <div class="c-slim-68">
                            <h3>Research</h3>
                            <div id="rq1">
                                <img id='img-research-q1' src="../assets/research_q1_title.png" alt="">
                                <h4>The Content</h4>
                                <div class="qa">
                                    <div class="cq1-l">
                                        <img id='img-research-q1-l' src="../assets/research_q1_l.png" alt="">
                                    </div>
                                    <div class='cq1-r'>
                                        <p class="p-text">In the beginning, we thought that determining the content was the most important thing. Since our learners are all primary school students, teachers have already cut and translated the content into the language that they may understand better.  We want to illustrate three points of knowledge in the exercise:</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="rq2 c-slim-68 title-70">
                        <img id='img-research-q2' src="../assets/research_q2_title.png" alt="">
                        <h4>Delivery of Concepts</h4>
                        <div class="qa">
                            <p class="p-text">Why it is hard to teach in a traditional way? We embarked on the delivery of concepts. Take the reading content of machine learning course in Stanford as an example: </p>
                            <img id='img-research-q2-m' src="../assets/research_q2_m.png" alt="">
                            <p class="p-text">This definition is too abstract to understand for pupil, and uses mathematical notation. For primary school students, it is really difficult to understand, let alone to cultivate interests.</p>
                        </div>
                    </div>
                    <div class="gray_bg title-70">
                        <div class="rq2 c-slim-68">
                            <h4>Examples of Concepts</h4>
                            <div class="qa">
                                <p class="p-text">As for the examples of concepts, most of them are abstract and unfamiliar for pupil since the main application fields of AI are finance, medical, and etc. </p>
                                <img id='img-research-q2-ec' src="../assets/example_of_concepts.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div id='continue_research' class="rq2 c-slim-68 title-110">
                        <img id='img_next_cr2em' src="../assets/next_cr2em.png" alt="">
                        <h4>Expert Interviews</h4>
                        <p class="p-text">We conducted expert interviews and literature review to explore the children's learning model. Discussing with Jerry Dong, a children's learning expert. He claims that children will build different schemas, try to absorb new things and use them to fit their schemes that are already existed, thus building new schemas. Finally reach the state of equilibrium.</p>
                    </div>
                    <img id='img_continue_research' src="../assets/img_continue_research.png" alt="">
                    <div class="gray_bg">
                        <div class="rq2 c-slim-68">
                            <h4>Previous Discoveries</h4>
                            <p class="p-text">We also combined some user interview and observation we did previously to gather more information. </p>
                            <!-- <span class="green-text">You could check the project here.</span> -->
                            <img src="../assets/previous_discoveries.png" alt="" id="previous_discoveries">
                        </div>
                    </div>
                </div>
                <div class="c-slim-68">
                    <p id='the_insights' class="p-text">From the insights, we tease apart our design challenges.</p>
                </div>
                <div class="c-challenges c-slim-68" id="cc-challenges">
                    <h3 id="title-design-challenges">Design Challenges</h3>
                    <p class="p-text">Based on the previous insights, we combed the children’s journey in the exercise, and derived three core design challenges: </p>
                    <p class="p-text">1.	In the exercise, how to deliver the knowledge points?</p>
                    <p class="p-text">2.	How to help them fit their existed schemas better?</p>
                    <p class="p-text">3.	How to cultivate their interests in specific exercise? How to encourage them to learn actively?</p>
                    <img src="../assets/img-challenges.png" alt="" id="img-challenges">
                </div>
                <div class="c-design title-70" id="cc-design">
                    <div class="c-slim-68">
                        <h3 id="title-design">Design</h3>
                        <h4>Ideate</h4>
                        <p class="p-text">Based on the three core challenges above, we brainstormed to get some idea. </p>
                    </div>
                    <div id="ideate-1" class="c-slim-68">
                        <div id='ideate-1-l'>
                            <img id="img-ideate-l" src="../assets/ideate-left.png" alt="">
                        </div>
                        <div id='ideate-1-r'>
                            <div class="list-item-line">
                                <img src='../assets/badge_1.png' alt='1'>
                                <p class="p-text">We proposed that a fascinating storyline tends to do more with less.</p>
                            </div>
                            <p class="p-text">So we created a character, named <span class="green-text">Robi</span>, a small robot. Robi will serve as the protagonist of a series of game-like exercises, running through the curriculum and involving a storyline.</p>
                        </div>
                    </div>
                    <div class="gray_bg title-70" >
                        <div class="c-slim-68" id="ideate-2">
                            <div class="list-item-line">
                                <img src="../assets/badge_2.png" alt="2">
                                <p class="p-text">Producing a graph of gist concepts, we selected <span class="green-text">‘experience’</span> and <span class="green-text">‘action’</span> as the main elements. </p>
                            </div>
                            <p class="p-text">In this way, helping Robi finish a certain kind of learning with a high accuracy could be the game goal.  To integrate knowledge points into the main game mode is the most important thing. Therefore, we try to further decompose ‘the process of machine learning’, refine and extract the content.</p>
                        </div>
                        <img id="img-ideate-2" src="../assets/p9.png" alt="">
                    </div>
                    <div class="c-slim-68 title-90" id="ideate-3">
                        <div class="list-item-line">
                            <img src="../assets/badge_3.png" alt="3">
                            <p class="p-text">“Teach the little Robi how to take care of himself” —— we found inspiration from the electronic pets.</p>
                        </div>
                    </div>
                    <div id="container-ideate-3" class="title-50">
                        <div class="c-slim-80">
                            <img src="../assets/p10.png" alt="" id="img-ideate-3">
                            <p class="p-text" id="c-i3-p1">To fit the psychological model of learning, we need to find a set of metaphors of ‘experience’ and ‘action’ in daily life to teach the concept of "machine could learn”. </p>
                            <p class="p-text" id="c-i3-p2">Robi knows nothing about taking care of himself at first. To train him, we give Robi three choices: watering, charging and repairing, which correspond to three attributes — the mood value, power, and maintenance value. </p>
                        </div>
                    </div>
                    <div class="gray_bg title-70">
                        <div class="c-slim-68" id="ideate-4">
                            <div id="ideate-4-l">
                                <div class="list-item-line">
                                    <img src="../assets/badge_4.png" alt="4">
                                    <p class="p-text">Also, we explain the concept of data vividly.</p>
                                </div>
                                <p class="p-text">In order to empower children to better understand data, they can view Robi's memory blocks in the game. The memory blocks record the Robi’s action of each round, which can explain the concept of data vividly.</p>
                            </div>
                            <div id="ideate-4-r">
                                <img id="img-ideate-4-r" src="../assets/p23.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div id="solution" class="c-slim-68">
                        <h4>Solution</h4>
                        <p class="p-text">The game has two phases: the training phase and the testing phase.</p>
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
        goToMain: function(){
            this.$router.push({path:'/'});
        },
        showAnchor: function(i) {
        console.log(i);
        this.$set(this.show_anchor,i,true);
        console.log(this.show_anchor);
        },
        hideAnchor: function(i) {
            this.$set(this.show_anchor,i,false);
        },
        goAnchor(selector) {
            document.querySelector(selector).scrollIntoView(true);
        }
    },
    data: function(){
        return {
            cate : [
                {title: 'Overview', anchor: 'overview'},
                {title: 'Research', anchor: 'research'},
                {title: 'Discovery', anchor: 'discovery'},
                {title: 'Ideate', anchor: 'ideate'},
                {title: 'Solution', anchor: 'solution'},
                {title: 'Algorithm Design', anchor: 'algorithm-design'},
                {title: 'Test & Iteration', anchor: 'test-iteration'},
                {title: 'Flow & Wireframe', anchor: 'flow-wireframe'},
                {title: 'Our Result', anchor: 'our-result'},
                {title: 'Reflection', anchor: 'reflection'}
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
                false
            ]
        }
    }
}
</script>

<style scoped src='../css/common_style.css'></style>
<style scoped src='../css/robi.css'></style>