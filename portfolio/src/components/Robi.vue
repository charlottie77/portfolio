<template>
    <div id="case-2">
        <div class="back-btn" @click="goToMain()">
            <button></button>
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
                <div class="c-overview title-150 c-slim-68" id="cc-background">
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
                <div class="c-research title-90">
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
                                        <p>In the beginning, we thought that determining the content was the most important thing. Since our learners are all primary school students, teachers have already cut and translated the content into the language that they may understand better.  We want to illustrate three points of knowledge in the exercise:</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="rq2 c-slim-68 title-70">
                        <img id='img-research-q2' src="../assets/research_q2_title.png" alt="">
                        <h4>Delivery of Concepts</h4>
                        <div class="qa">
                            <p>Why it is hard to teach in a traditional way? We embarked on the delivery of concepts. Take the reading content of machine learning course in Stanford as an example: </p>
                            <img id='img-research-q2-m' src="../assets/research_q2_m.png" alt="">
                            <p>This definition is too abstract to understand for pupil, and uses mathematical notation. For primary school students, it is really difficult to understand, let alone to cultivate interests.</p>
                        </div>
                    </div>
                    <div class="gray_bg title-70">
                        <div class="rq2 c-slim-68">
                            <h4>Examples of Concepts</h4>
                            <div class="qa">
                                <p>As for the examples of concepts, most of them are abstract and unfamiliar for pupil since the main application fields of AI are finance, medical, and etc. </p>
                                <img id='img-research-q2-ec' src="../assets/example_of_concepts.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div id='continue_research' class="rq2 c-slim-68 title-110">
                        <img id='continue_research' src="../assets/next_cr2em.png" alt="">
                        <h4>Expert Interviews</h4>
                        <p>We conducted expert interviews and literature review to explore the children's learning model. Discussing with Jerry Dong, a children's learning expert. He claims that children will build different schemas, try to absorb new things and use them to fit their schemes that are already existed, thus building new schemas. Finally reach the state of equilibrium.</p>
                    </div>
                    <img id='img_continue_research' src="../assets/img_continue_research.png" alt="">
                    <div class="gray_bg">
                        <div class="rq2 c-slim-68">
                            <h4>Previous Discoveries</h4>
                            <img src="../assets/previous_discoveries.png" alt="" id="previous_discoveries">
                        </div>
                    </div>
                </div>
                <div class="c-slim-68">
                    <p id='the_insights'>From the insights, we tease apart our design challenges.</p>
                </div>
                <div class="c-challenges c-slim-68" id="cc-challenges">
                    <h3 id="title-design-challenges">Design Challenges</h3>
                    <p>Based on the previous insights, we combed the children’s journey in the exercise, and derived three core design challenges: </p>
                    <p>1.	In the exercise, how to deliver the knowledge points?</p>
                    <p>2.	How to help them fit their existed schemas better?</p>
                    <p>3.	How to cultivate their interests in specific exercise? How to encourage them to learn actively?</p>
                    <img src="../assets/img-challenges.png" alt="" id="img-challenges">
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
    },
    data: function(){
        return {

        }
    }
}
</script>

<style scoped src='../css/common_style.css'></style>
<style scoped src='../css/robi.css'></style>