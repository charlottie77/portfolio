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
                                <!-- <label></label> -->
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
                        <img id="mission-title" src="../assets/robi_mission_title.png" alt="">
                        <div class="co-1 title-70">
                            <div class="co-1-1">
                                <img src="../assets/mission-left.png" alt="" id="mission-left">
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